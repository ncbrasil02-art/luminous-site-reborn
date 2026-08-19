import fs from 'fs';
import path from 'path';

const NEWS_DATA_PATH = path.join(process.cwd(), 'src/lib/news.data.ts');
const PUBLIC_NEWS_DIR = path.join(process.cwd(), 'public', 'news');

function getPhysicalFiles() {
  if (!fs.existsSync(PUBLIC_NEWS_DIR)) return new Set();
  return new Set(fs.readdirSync(PUBLIC_NEWS_DIR));
}

function cleanData() {
  const physicalFiles = getPhysicalFiles();
  let content = fs.readFileSync(NEWS_DATA_PATH, 'utf-8');
  
  // Regex to find image_url lines
  const imageUrlRegex = /"image_url":\s*"([^"]+)"/g;
  let match;
  let missingCount = 0;
  
  const replacements: Record<string, string> = {};
  
  while ((match = imageUrlRegex.exec(content)) !== null) {
    const originalPath = match[1];
    const filename = path.basename(originalPath);
    
    if (!physicalFiles.has(filename)) {
      replacements[match[0]] = '"image_url": null';
      missingCount++;
    }
  }

  // Apply replacements for featured images
  for (const [oldStr, newStr] of Object.entries(replacements)) {
    content = content.split(oldStr).join(newStr);
  }

  // Also handle content images that might be missing
  // This is more complex but we can at least flag them or replace with a spacer if needed
  // For now, let's just fix the featured images which are blocking the audit script
  
  fs.writeFileSync(NEWS_DATA_PATH, content);
  console.log(`Cleaned ${missingCount} missing featured image references in news.data.ts`);
}

cleanData();
