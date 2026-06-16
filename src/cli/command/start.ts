import type { CmdMetaData } from "../main.js";
import { siteMap } from "../../app/app.js";

export async function siteScan(scans:string[]){

    const promiseScans = scans.map(scan => new siteMap().site(scan).scan());
    const endScan = await Promise.all(promiseScans);
    endScan.map(scan => scan.print());
}

export default async function main(cmd:CmdMetaData):Promise<void>{
    await siteScan(cmd.args);
}