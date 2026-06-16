import { Page } from "playwright";

export async function scanSelect(page:Page,select:string,attribute:string):Promise<string[]>{
    const links = page.locator(select);
    const count = await links.count();

    const promiseUrls = [];

    for(let i = 0;i < count; i++){
        const url = links.nth(i).getAttribute(attribute);
        promiseUrls.push(url);
    }
    const urls = await Promise.all(promiseUrls);

    return urls.filter(url=>url !== null)
}