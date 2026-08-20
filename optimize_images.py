import os
import subprocess
from pathlib import Path

def convert_to_webp(directory):
    path = Path(directory)
    for ext in ['*.jpg', '*.jpeg', '*.png']:
        for img_path in path.glob(ext):
            webp_path = img_path.with_suffix('.webp')
            if not webp_path.exists():
                print(f"Converting {img_path} to {webp_path}")
                try:
                    subprocess.run(['cwebp', '-q', '80', str(img_path), '-o', str(webp_path)], check=True)
                except Exception as e:
                    print(f"Error converting {img_path}: {e}")

if __name__ == "__main__":
    # Convert main assets
    convert_to_webp('public')
    # Convert news assets
    # Only convert a subset if there are too many, but let's try the whole dir first
    convert_to_webp('public/news')
