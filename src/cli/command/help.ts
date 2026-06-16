import type { CmdMetaData } from "../main.js";
import { logger } from "../../util/logger.js";

export default function serverHelp(data:CmdMetaData){

    logger.window({
        title:"help 表示 | help display",
        content:[
            logger.createInfo(`現在使用できるコマンドは以下の通りです。 | The following commands are currently available.\n更新 | update : [2026/06/07]`),
            logger.createBar(),
            logger.createMessage(`help   : 使用できるコマンド一覧が確認できます。 | You can view a list of available commands.`),
        ]
    });
}