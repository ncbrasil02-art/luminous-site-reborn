import asyncio
import json
import os
from pathlib import Path
from playwright.async_api import async_playwright

async def main():
    async with async_run():
        pass

async def async_run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context()
        page = await context.new_page()
        
        # We need to hit the localhost:8080 where the dev server is running
        asset_files = [
            "src/assets/sistema-de-leilao-logo.png.asset.json",
            "src/assets/sistema-de-leilao-home-premium.png.asset.json"
        ]
        
        for f_path in asset_files:
            with open(f_path, 'r') as f:
                data = json.load(f)
                url = "http://localhost:8080" + data['url']
                print(f"Checking URL: {url}")
                try:
                    response = await page.goto(url)
                    print(f"Status: {response.status}")
                except Exception as e:
                    print(f"Error: {e}")
        
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
