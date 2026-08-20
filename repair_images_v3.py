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
        if f.is_file() and f.suffix.lower() in ['.jpg', '.jpeg', '.png', '.webp', '.gif']:
            name_lower = f.name.lower()
            images[name_lower] = f.name
            stem_lower = f.stem.lower()
            images[stem_lower] = f.name
            base = re.sub(r'-\d+x\d+$', '', stem_lower)
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
        slug = post.get('slug', '').lower()
        if slug in image_files:
            found_image = image_files[slug]
        thumb_id = post.get('thumb_id', '')
        if thumb_id and not found_image:
             for name, real_name in image_files.items():
                 if re.search(r'\b' + re.escape(thumb_id) + r'\b', name) or thumb_id == name.split('-')[0]:
                     found_image = real_name
                     break
        if not found_image and 'content' in post:
            content_imgs = re.findall(r'src="([^"]+)"', post['content'])
            for img_path in content_imgs:
                img_name = os.path.basename(img_path).lower()
                stem = Path(img_name).stem
                clean_stem = re.sub(r'-\d+x\d+$', '', stem).lower()
                if img_name in image_files:
                    found_image = image_files[img_name]
                    break
                elif clean_stem in image_files:
                    found_image = image_files[clean_stem]
                    break
        if not found_image:
            title_slug = re.sub(r'[^a-z0-9]+', '-', post.get('title', '').lower()).strip('-')
            if title_slug in image_files:
                found_image = image_files[title_slug]
            else:
                short_title = "-".join(title_slug.split('-')[:5])
                if short_title in image_files:
                    found_image = image_files[short_title]
        if found_image:
            new_path = f"/news/{found_image}"
            if current_img != new_path:
                post['image_url'] = new_path
                repaired_count += 1
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
