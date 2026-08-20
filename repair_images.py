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
        return images
    
    for f in NEWS_IMAGES_DIR.iterdir():
        if f.is_file() and f.suffix.lower() in ['.jpg', '.jpeg', '.png', '.webp']:
            # Example: '104894261_3181733431892666_9210561291767886677_n-300x164.jpg'
            # We want to match by the full name if possible, or the core name.
            images[f.name.lower()] = f.name
            
            # Also store without dimensions for fuzzy matching
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
    match = re.search(r'export const newsData: NewsPost\[\] = (\[.*\]);', content, re.DOTALL)
    if not match:
        print("Could not find newsData array.")
        return
    
    try:
        data = json.loads(match.group(1))
    except json.JSONDecodeError as e:
        print(f"JSON Decode Error: {e}")
        return

    image_files = get_image_files()
    repaired_count = 0
    
    for post in data:
        # Check if current image is default
        is_default = post.get('image_url') == '/news/default-nc.jpg'
        
        # Try to find a better image based on thumb_id or slug or title
        found_image = None
        
        # Strategy 1: Look for image named exactly like the slug
        slug = post.get('slug', '').lower()
        if slug in image_files:
            found_image = image_files[slug]
            
        # Strategy 2: Look for files starting with the thumb_id (if it's not just a random number)
        thumb_id = post.get('thumb_id', '')
        if thumb_id and not found_image:
             # Look for files that contain the thumb_id
             for name, real_name in image_files.items():
                 if thumb_id in name:
                     found_image = real_name
                     break

        if found_image and post['image_url'] != f"/news/{found_image}":
            post['image_url'] = f"/news/{found_image}"
            repaired_count += 1
            
        # Also clean up the 'content' field if it has hardcoded broken paths
        if 'content' in post:
            post['content'] = post['content'].replace('http://localhost/pollock2/wp-content/uploads/2022/08/', '/news/')
            # Replace broken news images in content with fallback or found ones if possible
            # (This is more complex, focusing on image_url first)

    if repaired_count > 0:
        new_json = json.dumps(data, indent=2, ensure_ascii=False)
        new_content = re.sub(r'export const newsData: NewsPost\[\] = \[.*\];', 
                            f'export const newsData: NewsPost[] = {new_json};', 
                            content, flags=re.DOTALL)
        NEWS_DATA_PATH.write_text(new_content)
        print(f"Repaired {repaired_count} images.")
    else:
        print("No improvements found.")

if __name__ == "__main__":
    repair_news_data()
