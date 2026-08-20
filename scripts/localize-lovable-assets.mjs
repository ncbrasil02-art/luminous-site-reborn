// Runs automatically before every build (see package.json "prebuild").
//
// Every time an image is added/edited inside the Lovable editor, it gets
// imported in code as `@/assets/<name>.asset.json`, and that JSON's "url"
// field points at "/__l5e/assets-v1/<id>/<file>" — a path that only
// resolves on Lovable's own domains (lovable.app, lovable.dev preview).
// On our own domain (Hostinger) that path 404s and the image silently
// falls back to whatever onError handler is nearby (usually the logo).
//
// This script downloads each such asset from the working Lovable preview
// domain, saves it as a plain static file under public/_lovable-assets/,
// and rewrites the .asset.json's "url" to that local path — so every
// component that does `(importedJson as any).url` keeps working unchanged,
// now pointing at a file that actually exists on our server.
import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const ASSETS_DIR = path.join(ROOT, "src", "assets");
const OUT_DIR = path.join(ROOT, "public", "_lovable-assets");
// Any Lovable domain that serves the project's live/preview build works as
// a source — it's where the __l5e proxy actually resolves.
const SOURCE_ORIGIN = "https://luminous-site-reborn.lovable.app";

async function findAssetJsonFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findAssetJsonFiles(full)));
    } else if (entry.name.endsWith(".asset.json")) {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  if (!existsSync(ASSETS_DIR)) return;
  const files = await findAssetJsonFiles(ASSETS_DIR);

  let fixed = 0;
  let skipped = 0;
  let failed = 0;

  for (const file of files) {
    const raw = await readFile(file, "utf-8");
    let json;
    try {
      json = JSON.parse(raw);
    } catch {
      console.warn(`[localize-lovable-assets] Skipping unparseable ${file}`);
      continue;
    }

    if (!json.url || !json.url.startsWith("/__l5e/")) {
      skipped++;
      continue;
    }

    const assetId = json.asset_id || "unknown";
    const filename = json.original_filename || path.basename(json.url);
    const localDir = path.join(OUT_DIR, assetId);
    const localFile = path.join(localDir, filename);
    const publicUrl = `/_lovable-assets/${assetId}/${filename}`;

    if (!existsSync(localFile)) {
      const sourceUrl = `${SOURCE_ORIGIN}${json.url}`;
      try {
        const res = await fetch(sourceUrl);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const buf = Buffer.from(await res.arrayBuffer());
        await mkdir(localDir, { recursive: true });
        await writeFile(localFile, buf);
      } catch (err) {
        console.warn(`[localize-lovable-assets] FAILED to fetch ${sourceUrl}: ${err.message}`);
        failed++;
        continue;
      }
    }

    json.url = publicUrl;
    await writeFile(file, JSON.stringify(json, null, 2) + "\n");
    fixed++;
  }

  console.log(
    `[localize-lovable-assets] fixed=${fixed} already-local=${skipped} failed=${failed} (of ${files.length} asset.json files)`
  );
  if (failed > 0) {
    console.warn(
      `[localize-lovable-assets] ${failed} asset(s) could not be downloaded — they'll keep using the broken Lovable-only URL until fixed manually.`
    );
  }
}

main().catch((err) => {
  console.error("[localize-lovable-assets] Unexpected error:", err);
  // Never fail the build over this — worst case, images fall back like before.
  process.exit(0);
});
