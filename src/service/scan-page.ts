import { chromium } from "playwright";
import { scanSelect } from "./scan-select.js";
import { scanResources } from "./scan-resources.js";

export async function scanPage(url:string):Promise<string[]>{
    const browser = await chromium.launch();
    const newContext = await browser.newContext();
    const page = await newContext.newPage();
    try {
        await page.goto(url, { waitUntil: "domcontentloaded" });
        const urls:string[]= [];

        urls.push( ...await scanSelect(page,"img","src"));
        urls.push( ...await scanSelect(page,"video","src"));
        urls.push( ...await scanSelect(page,"script","src"));
        urls.push( ...await scanSelect(page,"iframe","src"));
        urls.push( ...await scanSelect(page,"a","href"));
        urls.push( ...await scanSelect(page,"link","href"));
        urls.push( ...await scanResources(url));

        return urls.map(pass => new URL(pass,url).href);;
    } finally {
        await browser.close();
    }
}