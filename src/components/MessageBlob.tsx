import React from "react";
import { FaUser } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { GrLinkedinOption, GrGithub } from "react-icons/gr";
import { BotService } from "../services/BotService";
import { Message } from "../helpers/Types";
import { MessageSenderType, WebLinks } from "../helpers/Constants";
import { formatDateTimeToShow } from "../helpers/Formatter";

type Props = {
    index: number;
    msg: Message;
};

export default function MessageBlob({ msg, index }: Props): JSX.Element {
    const showdate = formatDateTimeToShow(msg.time);
    const linkedInUserName = "tejas-jadhav-765043110";
    const gitHubUserName = "TeeeJaey";

    if (msg.sender === MessageSenderType.Agent)
        return (
            <div key={index} className="chatbox agent">
                <FaRobot className="icon chat-icon" />
                <div className="msg">
                    {msg?.text.split("\n").map((text, ind) => (
                        <div key={ind}> {text}</div>
                    ))}

                    {msg.server === "Developer" && (
                        <div className="msgLinks">
                            <GrLinkedinOption
                                className="link linkedin"
                                onClick={() => BotService.openWebpage(WebLinks.linkedIn, linkedInUserName, 0)}
                            />
                            <GrGithub className="link github" onClick={() => BotService.openWebpage(WebLinks.github, gitHubUserName, 0)} />
                        </div>
                    )}
                    <div className="time"> {showdate} </div>
                </div>
            </div>
        );
    else
        return (
            <div key={index} className="chatbox user">
                <div className="msg">
                    {msg.text}
                    <div className="time"> {showdate} </div>
                </div>
                <FaUser className="icon chat-icon" />
            </div>
        );
}
