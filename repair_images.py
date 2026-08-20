import os
import json
import re
from pathlib import Path

# Paths
NEWS_DATA_PATH = Path('src/lib/news.data.ts')
NEWS_IMAGES_DIR = Path('public/news')

def get_image_files():
    """Returns a dictionary mapping base names (without extensions and dimensions) to full filenames."""
    images = {}
    if not NEWS_IMAGES_DIR.exists():
        print(f"Directory {NEWS_IMAGES_DIR} does not exist.")
        return images
    
    for f in NEWS_IMAGES_DIR.iterdir():
        if f.is_file() and f.suffix.lower() in ['.jpg', '.jpeg', '.png', '.webp']:
            # Store full filename
            images[f.name.lower()] = f.name
            
            # Store stem (name without extension)
            images[f.stem.lower()] = f.name
            
            # Also store without dimensions for fuzzy matching (e.g., image-300x200.jpg -> image)
            base = re.sub(r'-\d+x\d+$', '', f.stem).lower()
            if base not in images:
                images[base] = f.name
    return images

def repair_news_data():
    if not NEWS_DATA_PATH.exists():
        print("News data file not found.")
        return

    content = NEWS_DATA_PATH.read_text()
    
    # Extract the array content
    # Look for the start of the array and capture everything until the exported declaration ends
    match = re.search(r'export const newsData: NewsPost\[\] = (\[.*\]);', content, re.DOTALL)
    if not match:
        print("Could not find newsData array using standard regex.")
        # Try a more flexible match if the file has comments or slight variations
        match = re.search(r'newsData: NewsPost\[\] = (\[.*\])', content, re.DOTALL)
        if not match:
            print("Failed to find array even with fallback.")
            return
    
    array_str = match.group(1)
    try:
        data = json.loads(array_str)
    except json.JSONDecodeError as e:
        print(f"JSON Decode Error: {e}")
        # The file might have trailing commas or other TS-isms that JSON doesn't like
        # Attempt a very basic cleanup if it's just a trailing comma
        try:
            cleaned = re.sub(r',\s*\]', ']', array_str)
            data = json.loads(cleaned)
        except:
            print("Could not parse newsData even after basic cleanup.")
            return

    image_files = get_image_files()
    repaired_count = 0
    
    for post in data:
        # Check if current image is default
        current_img = post.get('image_url', '')
        
        # Try to find a better image
        found_image = None
        
        # Strategy 1: Look for image named exactly like the slug
        slug = post.get('slug', '').lower()
        if slug in image_files:
            found_image = image_files[slug]
            
        # Strategy 2: Look for files starting with the thumb_id
        thumb_id = post.get('thumb_id', '')
        if thumb_id and not found_image:
             for name, real_name in image_files.items():
                 if thumb_id in name:
                     found_image = real_name
                     break
        
        # Strategy 3: Check content for any valid /news/ links that might have been missed
        if not found_image and 'content' in post:
            content_imgs = re.findall(r'src="([^"]+)"', post['content'])
            for img_path in content_imgs:
                img_name = os.path.basename(img_path).lower()
                if img_name in image_files:
                    found_image = image_files[img_name]
                    break

        if found_image:
            new_path = f"/news/{found_image}"
            if current_img != new_path:
                post['image_url'] = new_path
                repaired_count += 1
                
        # Clean up content paths
        if 'content' in post:
            post['content'] = post['content'].replace('http://localhost/pollock2/wp-content/uploads/2022/08/', '/news/')
            post['content'] = post['content'].replace('https://www.ncbrasil.com.br/wp-content/uploads/', '/news/')

    if repaired_count > 0:
        # Re-construct the file carefully
        new_json = json.dumps(data, indent=2, ensure_ascii=False)
        # Preserve the interface and exports
        prefix = "export interface NewsPost {\n  id: string;\n  title: string;\n  slug: string;\n  date: string;\n  content: string;\n  categories: string[];\n  tags: string[];\n  image_url: string;\n  thumb_id: string;\n}\n\nexport const newsData: NewsPost[] = "
        suffix = ";"
        NEWS_DATA_PATH.write_text(prefix + new_json + suffix)
        print(f"Repaired {repaired_count} images.")
    else:
        print("No improvements found.")

if __name__ == "__main__":
    repair_news_data()
