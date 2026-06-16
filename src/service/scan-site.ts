import { scanPage } from "./scan-page.js";

export async function scanSite(
        url: string,
        scannedUrls = new Set<string>()
    ): Promise<string[]> {
    const hostname = new URL(url).hostname;

    if (scannedUrls.has(url)) {
        return [];
    }

    scannedUrls.add(url);

    let nowScanUrls: string[];

    try {
        nowScanUrls = await scanPage(url);
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.warn(`Failed to scan ${url}: ${message}`);
        return [...scannedUrls];
    }
    const newScanUrls: string[] = [];

    for (const nextUrl of nowScanUrls) {
        const nextHostname = new URL(nextUrl).hostname;

        if (nextHostname !== hostname) continue;
        if (scannedUrls.has(nextUrl)) continue;

        newScanUrls.push(nextUrl);
    }

    for (const nextUrl of newScanUrls) {
        await scanSite(nextUrl, scannedUrls);
    }

    return [...scannedUrls];
}
