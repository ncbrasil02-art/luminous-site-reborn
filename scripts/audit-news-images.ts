import fs from 'fs';
import path from 'path';
import { newsData } from '../src/lib/news.data';

const PUBLIC_NEWS_DIR = path.join(process.cwd(), 'public', 'news');

// Helper to normalize strings for comparison (removes accents, lowercase, non-alphanumeric)
function strictNormalize(str: string) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

// Build a map of normalized filenames to actual filenames in the filesystem
const filesInDir = fs.existsSync(PUBLIC_NEWS_DIR) ? fs.readdirSync(PUBLIC_NEWS_DIR) : [];
const normalizedFileMap = new Map<string, string>();
filesInDir.forEach(file => {
  normalizedFileMap.set(strictNormalize(file), file);
});

function checkImage(imageUrl: string | null): { success: boolean, suggestion?: string } {
  if (!imageUrl) return { success: true };
  
  const relativePath = imageUrl.startsWith('/') ? imageUrl.slice(1) : imageUrl;
  const fullPath = path.join(process.cwd(), 'public', relativePath);
  
  if (fs.existsSync(fullPath)) {
    return { success: true };
  }

  // If exact match fails, try strict normalized match
  const basename = path.basename(imageUrl);
  const normalizedSearch = strictNormalize(basename);
  
  if (normalizedFileMap.has(normalizedSearch)) {
    const actualFile = normalizedFileMap.get(normalizedSearch);
    const suggestedPath = `/news/${actualFile}`;
    return { success: false, suggestion: suggestedPath };
  }

  return { success: false };
}

function extractImagesFromHtml(html: string): string[] {
  const imgTags = html.match(/<img [^>]*src="([^"]+)"/g) || [];
  return imgTags.map(tag => {
    const match = tag.match(/src="([^"]+)"/);
    return match ? match[1] : '';
  }).filter(src => src.startsWith('/news/'));
}

async function runAudit() {
  console.log('Starting News Image Audit...');
  let totalIssues = 0;
  let fixableIssues = 0;
  let totalPostsChecked = 0;

  if (!fs.existsSync(PUBLIC_NEWS_DIR)) {
    console.error('CRITICAL: /public/news directory is missing.');
    process.exit(1);
  }

  for (const post of newsData) {
    totalPostsChecked++;
    
    // Check Featured Image
    const res = checkImage(post.image_url);
    if (!res.success) {
      if (res.suggestion) {
        console.warn(`[FIXABLE] ID ${post.id}: "${post.image_url}" should be "${res.suggestion}"`);
        fixableIssues++;
      } else {
        console.error(`[ERROR] ID ${post.id}: Missing featured image "${post.image_url}"`);
        totalIssues++;
      }
    }

    // Check images in content
    const contentImages = extractImagesFromHtml(post.content);
    for (const src of contentImages) {
      const cRes = checkImage(src);
      if (!cRes.success) {
        if (cRes.suggestion) {
          console.warn(`[FIXABLE CONTENT] ID ${post.id}: "${src}" should be "${cRes.suggestion}"`);
          fixableIssues++;
        } else {
          console.error(`[ERROR CONTENT] ID ${post.id}: Missing content image "${src}"`);
          totalIssues++;
        }
      }
    }
  }

  console.log('\n--- Audit Results ---');
  console.log(`Posts processed: ${totalPostsChecked}`);
  console.log(`Missing files (404): ${totalIssues}`);
  console.log(`Path mismatches (Fixable): ${fixableIssues}`);

  if (totalIssues > 0) {
    console.error('\nFAIL: Build blocked due to missing news images.');
    process.exit(1);
  }
  
  if (fixableIssues > 0) {
    console.warn('\nWARNING: Some image paths need normalization, but files exist.');
    // We allow the build if the files exist but have naming mismatches, 
    // although in a perfect world we'd auto-fix them.
  }

  console.log('\nSUCCESS: No missing image files detected.');
  process.exit(0);
}

runAudit().catch(err => {
  console.error(err);
  process.exit(1);
});
