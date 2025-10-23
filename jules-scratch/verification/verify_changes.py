
import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        await page.goto("http://localhost:5173")
        await page.wait_for_timeout(3000)  # Wait for animations
        await page.screenshot(path="jules-scratch/verification/hero_section.png")

        await page.evaluate("document.getElementById('about').scrollIntoView()")
        await page.wait_for_timeout(2000) # Wait for scroll animations
        await page.screenshot(path="jules-scratch/verification/about_section.png")

        await page.evaluate("document.getElementById('skills').scrollIntoView()")
        await page.wait_for_timeout(2000) # Wait for scroll animations
        await page.screenshot(path="jules-scratch/verification/skills_section.png")

        await browser.close()

asyncio.run(main())
