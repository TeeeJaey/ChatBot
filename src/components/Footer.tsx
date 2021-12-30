import React, { KeyboardEvent, useState } from 'react';
import { FaUser } from "react-icons/fa";

type Props = {
  sendMsg:Function;
};

export default function Footer(props: Props) {
  const [msg, setMsg] = useState("");

  const _handleKeyDown = (e:KeyboardEvent) => {
    if(e.key == "Enter")
      sendMsg();
  }

  const sendMsg = () => {
    if(!msg) return;
    props.sendMsg(msg);
    setMsg("");
  } 

  return  <div className="header-footer footer">
            <FaUser className="chat-icon"/>
            <input  className='chat-input' type="text" value={msg}
                    onChange={e => setMsg(e.target.value)} onKeyDown={e=>_handleKeyDown(e)} /> 
            <button className='chat-btn' onClick={() => sendMsg()} > SEND </button>
          </div>;
}
