import { CommandHandler ,type Data} from "./app/shell/command-handler.js";
import minimist from "minimist"

import help from "./command/help.js";
import run from "./command/start.js";
import path from "node:path";

type MetaData = {
    pack:{
        version:string,
        name:string
    },
    cli:{
        cwd:string,
        dirname:string
    },
    option:minimist.ParsedArgs
}

export type CmdMetaData = Data<MetaData>;

function addCommand(cmdHandler:CommandHandler<MetaData>){
    cmdHandler
    .add("",async (data)=> {
        if(data.meta.option?.version){
            console.log(`[SYS]${data.meta.pack.version}`);
            return;
        }
        if(data.meta.option?.help){
            help(data);
            return;
        }
        await run(data);
    })
    .add("help",help);
}

function getOption(argv:string[]){
    // コマンド解析
    const args = minimist(argv,{
        alias: {
            v: "version",
            h: "help",
        },

        boolean: [
            "version",
            "help"
        ]
    });

    const {open:openBrowser,...tmp} = args;
    const updateArgs = args.open?{openBrowser,...tmp}:args;

    return updateArgs
}


function getMetaData(argv:string[]):MetaData{
    return {
        pack:{
            version:"0.0.1",
            name:"site-map"
        },
        cli:{
            cwd:process.cwd(),
            dirname:path.join(import.meta.dirname,"../")
        },
        option:getOption(argv)
    }
}

function getOnError(){
    console.log("[SYS] Unknown command");
    console.log("[SYS] Run help to find the command");
    console.log("[SYS] 未知のコマンドです");
    console.log("[SYS] コマンドを探すには help を実行してください");
}


export async function cli(){
    const argv = process.argv.slice(2);

    const cmdHandler = new CommandHandler<MetaData>();
    cmdHandler.meta = getMetaData(argv);
    cmdHandler.onError = getOnError;

    addCommand(cmdHandler);
    await cmdHandler.run(argv);
}