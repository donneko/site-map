import { chromium } from "playwright";

export async function scanResources(url: string): Promise<string[]> {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    const resources: string[] = [];

    page.on("response", async (response) => {
        const request = response.request();

        resources.push(response.url());
    });

    try {
        await page.goto(url, { waitUntil: "networkidle" });
        return resources;
    } finally {
        await browser.close();
    }
}