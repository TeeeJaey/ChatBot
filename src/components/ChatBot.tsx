import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { MessageType } from './Types'; 
type Props = {};

export default function ChatBot(props: Props) {
    
    const initMsgList:MessageType[] = [
        {sender:"Agent",
        text:"Hi, How can I help you today?", 
        time: Date.now()},
        {sender:"User",
        text:"This one adds a right triangle on the left, flush at the top by using .tri-right and .left-top to specify the location...", 
        time: Date.now()}
    ];
    const [msgList, setMsgList] = useState(initMsgList);
    
    const sendMsg = (msg:string) => {
        const newMsgList:MessageType[] = [...msgList];
        newMsgList.push({
            sender:"User",
            text:msg,
            time:Date.now()
        });
        setMsgList(newMsgList);
    }


    return  <div className="container">
                <Header />
                <Content msgList={msgList} />
                <Footer sendMsg={(msg:string) => sendMsg(msg)} />
            </div>
}
