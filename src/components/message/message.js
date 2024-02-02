import "./message.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { messages } from "../../db/message";
import WriteMessage from "./WriteMessage";
import { useState } from "react";
const Message = () => {
  return (
    <div className="messageContainer">
      <AiOutlineCloseCircle className="close" />
      <div className="msgWrite"></div>

      <h2 className="messageTitle">Message</h2>
      <hr />
      {messages.map((m) => {
        return (
          <div className="messageSender">
            <img src={m.profile} alt="" className="senderProfile" />
            <div className="senderName">{m.sender_firstname}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Message;
