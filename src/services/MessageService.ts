import { MessageSenderType } from "../helpers/Constants";
import { Message } from "../helpers/Types";

export class MessageService {
    static createAgentMsg(text: string, server: string = "Bot") {
        const msg: Message = {
            sender: MessageSenderType.Agent,
            text: text,
            time: Date.now(),
            server: server,
        };

        msg.server = server;
        return msg;
    }

    static createUserMsg(text: string, server: string = "User") {
        const msg: Message = {
            sender: MessageSenderType.User,
            text: text,
            time: Date.now(),
            server: server,
        };

        msg.server = server;
        return msg;
    }
}
