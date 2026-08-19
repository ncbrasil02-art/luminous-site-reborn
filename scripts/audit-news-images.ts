import fs from 'fs';
import path from 'path';
import { newsData } from './src/lib/news.data';

const PUBLIC_NEWS_DIR = path.join(process.cwd(), 'public', 'news');

function checkImage(imageUrl: string | null, context: string): boolean {
  if (!imageUrl) return true;
  
  // Clean URL: remove leading slash for fs check if it's relative to public
  const relativePath = imageUrl.startsWith('/') ? imageUrl.slice(1) : imageUrl;
  const fullPath = path.join(process.cwd(), 'public', relativePath);
  
  if (!fs.existsSync(fullPath)) {
    console.error(`[404] Missing image: ${imageUrl} (Context: ${context})`);
    return false;
  }
  return true;
}

function extractImagesFromHtml(html: string): string[] {
  const imgTags = html.match(/<img [^>]*src="([^"]+)"/g) || [];
  return imgTags.map(tag => {
    const match = tag.match(/src="([^"]+)"/);
    return match ? match[1] : '';
  }).filter(src => src.startsWith('/news/'));
}

async function runAudit() {
  console.log('Starting image audit for /news directory...');
  let totalIssues = 0;
  let totalPostsChecked = 0;

  if (!fs.existsSync(PUBLIC_NEWS_DIR)) {
    console.error('Error: public/news directory does not exist!');
    process.exit(1);
  }

  for (const post of newsData) {
    totalPostsChecked++;
    
    // Check Featured Image (image_url)
    if (!checkImage(post.image_url, `Post ID ${post.id} featured image`)) {
      totalIssues++;
    }

    // Check images in content
    const contentImages = extractImagesFromHtml(post.content);
    for (const src of contentImages) {
      if (!checkImage(src, `Post ID ${post.id} content image`)) {
        totalIssues++;
      }
    }
  }

  console.log(`\nAudit Complete:`);
  console.log(`Posts checked: ${totalPostsChecked}`);
  console.log(`Total missing images found: ${totalIssues}`);

  if (totalIssues > 0) {
    console.error(`\nFAILED: Found ${totalIssues} missing images.`);
    process.exit(1);
  } else {
    console.log('\nSUCCESS: All news images are present.');
    process.exit(0);
  }
}

runAudit().catch(err => {
  console.error('Audit failed with error:', err);
  process.exit(1);
});
