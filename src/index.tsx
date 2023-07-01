import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import ChatBot from "./components/ChatBot";

ReactDOM.render(
    <React.StrictMode>
        <div>
            <ChatBot />
        </div>
    </React.StrictMode>,
    document.getElementById("root"),
);
