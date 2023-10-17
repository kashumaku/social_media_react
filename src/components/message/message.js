import "./message.css"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { messages } from "../../db/message";
import WriteMessage from "./WriteMessage";
import { useState } from "react";
const Message = () => {
    const [fetchedMessage, setFetchedMessage] = useState([])
    const message = messages.filter((m) => {
        return (m.user_id === 80)
    })
    const fetchMessage = (senderId) => {
        const filteredMessage = message.filter((m) => {
            return m.sender_id === senderId
        })
        setFetchedMessage(filteredMessage)

    }
    return (<div className="messageContainer">
        <AiOutlineCloseCircle className="close" />
        <div className="msgWrite">
            {fetchedMessage.length > 0 && <WriteMessage fetchedMessage={fetchedMessage} />}
        </div>

        <h2 className="messageTitle">Message</h2>
        <hr />
        {message.map((m) => {
            return (
                <div className="messageSender">
                    <img src="/assets/people/2.jpg" alt="" className="senderProfile" />
                    <div className="senderName" onClick={() => fetchMessage(m.sender_id)}>{m.sender_firstname}</div>
                </div>
            )
        })}
    </div>);
}

export default Message;