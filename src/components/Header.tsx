import React from "react";
import { FaRobot } from "react-icons/fa";

type HeaderProps = {
    resetChat: Function;
};

export default function Header({ resetChat }: HeaderProps): JSX.Element {
    return (
        <div className="header-footer header">
            <FaRobot className="chat-icon" />
            <div className="header-content"> Your Chat Assistant</div>
            <button className="chat-btn" onClick={() => resetChat()}>
                RESET
            </button>
        </div>
    );
}
