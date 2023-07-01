import React, { useCallback, useEffect, useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { Message } from "../helpers/Types";
import { BotService } from "../services/BotService";
import { MessageSenderType } from "../helpers/Constants";

const initMsgList: Message[] = [];

export default function ChatBot(): JSX.Element {
    const [msgList, setMsgList] = useState(initMsgList);
    const [showTyping, setShowTyping] = useState(false);

    const addMsg = useCallback(
        (msg: Message) => {
            const newMsgList: Message[] = [...msgList];
            newMsgList.push(msg);
            setMsgList(newMsgList);
        },
        [msgList],
    );

    const resetChat = () => {
        setMsgList([]);
    };

    useEffect(() => {
        setShowTyping(true);
        if (!msgList || msgList.length === 0) {
            BotService.startChat().then((msg: Message) => {
                addMsg(msg);
                setShowTyping(false);
            });
        } else {
            const lastMsg: Message = msgList[msgList.length - 1];
            if (lastMsg.sender === MessageSenderType.Agent) {
                setShowTyping(false);
                return;
            }

            BotService.getAnswer(lastMsg.text).then((msg: Message) => {
                addMsg(msg);
                setShowTyping(false);
            });
        }
    }, [addMsg, msgList]);

    return (
        <div className="container">
            <Header resetChat={() => resetChat()} />
            <Content showTyping={showTyping} msgList={msgList} />
            <Footer sendMsg={(msg: Message) => addMsg(msg)} />
        </div>
    );
}
