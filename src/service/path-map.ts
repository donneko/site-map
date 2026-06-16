export function pathToMap(urls:string[]):string[][]{
    const paths:string[][] = [];


    for(const url of urls){
        const hostname = new URL(url).hostname.split(".").reverse();;
        const pathname = new URL(url).pathname.split("/");
        const path     = [...hostname,...pathname].filter(p => p.length !== 0);

        if(paths.some(p =>JSON.stringify(p) === JSON.stringify(path))) continue;

        paths.push(path);
    }

    return paths;
}