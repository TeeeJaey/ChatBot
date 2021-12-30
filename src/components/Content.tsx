import React, { useEffect, useState } from 'react';
import { FaUser } from "react-icons/fa";
import Message from './Message';
import { MessageType } from './Types'; 

type Props = {msgList:MessageType[]};

export default function Content(props: Props) {

    useEffect(()=>{
        console.log("MsgList");
    },[props.msgList]);
    
    return  <div className="content">
                {props.msgList.map(
                    (msg:MessageType,i) => <Message i={i} key={i} msg={msg}/> 
                )}
            </div>;
}
