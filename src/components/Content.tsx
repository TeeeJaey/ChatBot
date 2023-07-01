import React, { useEffect, useRef } from "react";
import MessageBlob from "./MessageBlob";
import "../styles/Content.css";
import { Message } from "../helpers/Types";

//import * as img from "../images/typing.gif";
//const typing = img.default;
const typing = require("../assets/typing.gif");

type Props = {
    showTyping: Boolean;
    msgList: Message[];
};

export default function Content(props: Props): JSX.Element {
    const endRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [props.msgList]);

    return (
        <div className="content">
            {props.msgList.map((msg: Message, i) => (
                <MessageBlob key={i} index={i} msg={msg} />
            ))}

            {props.showTyping && <img src={typing} className="typing-gif" alt="typing..." />}
            <div ref={endRef} />
        </div>
    );
}
