import type { CmdHandler } from "../../types/tyoi-cli.js"

import def    from "../../command/default.js";
import help   from "../../command/help.js";
import run    from "../../command/start.js";

export function addCommand(cmdHandler:CmdHandler){
    cmdHandler
        .add(""      ,def)
        .add("run"   ,run)
        .add("help"  ,help);
}