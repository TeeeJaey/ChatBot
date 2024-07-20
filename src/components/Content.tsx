import React, { useEffect, useRef } from "react";
import MessageBlob from "./MessageBlob";
import "../styles/Content.css";
import { Message } from "../helpers/Types";
import typing from "../assets/typing.gif";

type ContentProps = {
    showTyping: Boolean;
    msgList: Message[];
};

export default function Content({ msgList, showTyping }: ContentProps): JSX.Element {
    const endRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [msgList]);

    return (
        <div className="content">
            {msgList.map((msg: Message, i) => (
                <MessageBlob key={i} index={i} msg={msg} />
            ))}

            {showTyping && <img src={typing} className="typing-gif" alt="typing..." />}
            <div ref={endRef} />
        </div>
    );
}
