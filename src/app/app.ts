import { scanSite } from "../service/scan-site.js";
import { pathToMap } from "../service/path-map.js";
import { printTree } from "../service/print-tree.js";
import { pathsToTree } from "../service/paths-tree.js";


export class siteMap{
    private siteUrl!:string;
    private pathMap!:string[][];

    site(url:string):this{
        this.siteUrl = url;
        return this;
    }
    async scan(url?:string):Promise<this>{
        if(url) this.siteUrl = url;

        const sitePath = await scanSite(this.siteUrl);
        this.pathMap = pathToMap(sitePath);
        return this;
    }
    print(){
        const pathsTree = pathsToTree(this.pathMap);
        printTree(pathsTree,">");
    }
}
