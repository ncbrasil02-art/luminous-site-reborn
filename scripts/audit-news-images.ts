import fs from 'fs';
import path from 'path';
import { newsData } from '../src/lib/news.data';

const PUBLIC_NEWS_DIR = path.join(process.cwd(), 'public', 'news');

// Helper to normalize strings for comparison (removes accents, lowercase)
function normalizeString(str: string) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, '-');
}

// Build a map of normalized filenames to actual filenames in the filesystem
const filesInDir = fs.readdirSync(PUBLIC_NEWS_DIR);
const normalizedFileMap = new Map<string, string>();
filesInDir.forEach(file => {
  normalizedFileMap.set(normalizeString(file), file);
});

function checkImage(imageUrl: string | null, context: string): { success: boolean, suggestion?: string } {
  if (!imageUrl) return { success: true };
  
  const relativePath = imageUrl.startsWith('/') ? imageUrl.slice(1) : imageUrl;
  const fullPath = path.join(process.cwd(), 'public', relativePath);
  
  if (fs.existsSync(fullPath)) {
    return { success: true };
  }

  // If exact match fails, try normalized match
  const basename = path.basename(imageUrl);
  const normalizedSearch = normalizeString(basename);
  
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
  console.log('Starting intelligent image audit for /news directory...');
  let totalIssues = 0;
  let fixedWithNormalization = 0;
  let totalPostsChecked = 0;
  const updates: Array<{ id: string, field: string, old: string, new: string }> = [];

  for (const post of newsData) {
    totalPostsChecked++;
    
    // Check Featured Image
    const res = checkImage(post.image_url, `Post ID ${post.id} featured image`);
    if (!res.success) {
      if (res.suggestion) {
        console.log(`[FIXABLE] ${post.image_url} -> ${res.suggestion}`);
        updates.push({ id: post.id, field: 'image_url', old: post.image_url!, new: res.suggestion });
        fixedWithNormalization++;
      } else {
        console.error(`[404] Missing image: ${post.image_url} (Post ID ${post.id})`);
        totalIssues++;
      }
    }

    // Check images in content (reporting only for now as content is harder to batch update safely)
    const contentImages = extractImagesFromHtml(post.content);
    for (const src of contentImages) {
      const cRes = checkImage(src, `Post ID ${post.id} content image`);
      if (!cRes.success) {
        if (cRes.suggestion) {
          console.log(`[FIXABLE CONTENT] ${src} -> ${cRes.suggestion} (Post ID ${post.id})`);
        } else {
          console.error(`[404 CONTENT] Missing image: ${src} (Post ID ${post.id})`);
          totalIssues++;
        }
      }
    }
  }

  console.log(`\nAudit Summary:`);
  console.log(`Posts checked: ${totalPostsChecked}`);
  console.log(`Fixable via normalization: ${fixedWithNormalization}`);
  console.log(`Hard 404s (missing files): ${totalIssues}`);

  if (updates.length > 0) {
    console.log(`\nFound ${updates.length} featured image path corrections needed.`);
    // In a real build CI, we might fail or auto-apply.
  }

  if (totalIssues > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runAudit().catch(err => {
  console.error(err);
  process.exit(1);
});

