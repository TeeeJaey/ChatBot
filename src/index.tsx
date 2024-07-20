import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import ChatBot from "./components/ChatBot";

ReactDOM.render(
    <React.StrictMode>
        <ChatBot />
    </React.StrictMode>,
    document.getElementById("root"),
);
