import { Logger } from "@donneko/tyoi-logger";
import type { CmdMetaData } from "../types/tyoi-cli.js";

export default function serverHelp(data:CmdMetaData){
    const logger = new Logger();

    logger.window({
        title:"help 表示 | help display",
        content:[
            logger.createInfo(`現在使用できるコマンドは以下の通りです。 | The following commands are currently available.\n更新 | update : [2026/06/07]`),
            logger.createBar(),
            logger.createMessage(`help   : 使用できるコマンド一覧が確認できます。 | You can view a list of available commands.`),
        ]
    });
}