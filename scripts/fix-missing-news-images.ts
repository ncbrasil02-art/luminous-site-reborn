import fs from 'fs';
import path from 'path';
import { newsData } from '../src/lib/news.data';

const PUBLIC_NEWS_DIR = path.join(process.cwd(), 'public', 'news');

async function fixImages() {
  console.log('Starting image repair and download...');
  
  if (!fs.existsSync(PUBLIC_NEWS_DIR)) {
    fs.mkdirSync(PUBLIC_NEWS_DIR, { recursive: true });
  }

  const missingImages = new Set<string>();
  
  for (const post of newsData) {
    if (post.image_url && post.image_url.startsWith('/news/')) {
      const fullPath = path.join(process.cwd(), 'public', post.image_url);
      if (!fs.existsSync(fullPath)) {
        missingImages.add(post.image_url);
      }
    }
    
    // Extract content images
    const imgTags = post.content.match(/<img [^>]*src="([^"]+)"/g) || [];
    imgTags.forEach(tag => {
      const match = tag.match(/src="([^"]+)"/);
      if (match && match[1].startsWith('/news/')) {
        const fullPath = path.join(process.cwd(), 'public', match[1]);
        if (!fs.existsSync(fullPath)) {
          missingImages.add(match[1]);
        }
      }
    });
  }

  console.log(`Found ${missingImages.size} missing images. Attempting to download from legacy source...`);
  
  for (const imgPath of missingImages) {
    const filename = path.basename(imgPath);
    // Try to guess the legacy WP path or common patterns
    // The previous AI message mentioned downloading from legacy WordPress upload path
    const legacyUrl = `https://www.ncbrasil.com.br/wp-content/uploads/${filename}`;
    const destination = path.join(PUBLIC_NEWS_DIR, filename);
    
    try {
      console.log(`Downloading: ${filename}...`);
      const response = await fetch(legacyUrl);
      if (response.ok) {
        const arrayBuffer = await response.arrayBuffer();
        fs.writeFileSync(destination, Buffer.from(arrayBuffer));
        console.log(`Successfully saved ${filename}`);
      } else {
        console.error(`Failed to download ${filename} (Status: ${response.status})`);
      }
    } catch (error) {
      console.error(`Error downloading ${filename}:`, error);
    }
  }

  console.log('Repair process finished.');
}

fixImages().catch(console.error);
