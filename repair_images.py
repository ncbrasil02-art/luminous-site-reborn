import os
import json
import re
from pathlib import Path

# Paths
NEWS_DATA_PATH = Path('src/lib/news.data.ts')
NEWS_IMAGES_DIR = Path('public/news')

def get_image_files():
    images = {}
    if not NEWS_IMAGES_DIR.exists():
        return images
    
    for f in NEWS_IMAGES_DIR.iterdir():
        if f.is_file() and f.suffix.lower() in ['.jpg', '.jpeg', '.png', '.webp']:
            images[f.name.lower()] = f.name
            images[f.stem.lower()] = f.name
            base = re.sub(r'-\d+x\d+$', '', f.stem).lower()
            if base not in images:
                images[base] = f.name
    return images

def repair_news_data():
    if not NEWS_DATA_PATH.exists():
        return

    content = NEWS_DATA_PATH.read_text()
    match = re.search(r'export const newsData: NewsPost\[\] = (\[.*\]);', content, re.DOTALL)
    if not match:
        return
    
    array_str = match.group(1)
    try:
        data = json.loads(array_str)
    except:
        return

    image_files = get_image_files()
    repaired_count = 0
    
    for post in data:
        current_img = post.get('image_url', '')
        found_image = None
        
        # Strategy 1: Slug match
        slug = post.get('slug', '').lower()
        if slug in image_files:
            found_image = image_files[slug]
            
        # Strategy 2: Title to words match (fuzzy)
        if not found_image:
            title_words = re.findall(r'\w+', post.get('title', '').lower())
            if len(title_words) > 2:
                potential_name = "-".join(title_words)
                if potential_name in image_files:
                    found_image = image_files[potential_name]

        # Strategy 3: thumb_id substring match
        thumb_id = post.get('thumb_id', '')
        if thumb_id and not found_image:
             for name, real_name in image_files.items():
                 if thumb_id in name:
                     found_image = real_name
                     break
        
        # Strategy 4: Content image search
        if not found_image and 'content' in post:
            # Look for <img> tags in content and try to find matching local files
            content_imgs = re.findall(r'src="([^"]+)"', post['content'])
            for img_path in content_imgs:
                img_name = os.path.basename(img_path).lower()
                # Remove common WP suffixes
                clean_img_name = re.sub(r'-\d+x\d+$', '', Path(img_name).stem).lower()
                if img_name in image_files:
                    found_image = image_files[img_name]
                    break
                elif clean_img_name in image_files:
                    found_image = image_files[clean_img_name]
                    break

        if found_image:
            new_path = f"/news/{found_image}"
            if current_img != new_path:
                post['image_url'] = new_path
                repaired_count += 1
                
        # Clean up content paths (global replacement)
        if 'content' in post:
            post['content'] = post['content'].replace('http://localhost/pollock2/wp-content/uploads/2022/08/', '/news/')
            post['content'] = post['content'].replace('https://www.ncbrasil.com.br/wp-content/uploads/', '/news/')
            # Also clean up relative news paths that might have double slashes or something
            post['content'] = post['content'].replace('//news/', '/news/')

    if repaired_count > 0:
        new_json = json.dumps(data, indent=2, ensure_ascii=False)
        prefix = "export interface NewsPost {\n  id: string;\n  title: string;\n  slug: string;\n  date: string;\n  content: string;\n  categories: string[];\n  tags: string[];\n  image_url: string;\n  thumb_id: string;\n}\n\nexport const newsData: NewsPost[] = "
        suffix = ";"
        NEWS_DATA_PATH.write_text(prefix + new_json + suffix)
        print(f"Repaired {repaired_count} images.")
    else:
        print("No improvements found.")

if __name__ == "__main__":
    repair_news_data()
