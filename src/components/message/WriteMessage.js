import "./writeMessage.css"
const WriteMessage = ({ fetchedMessage }) => {

    return (
        <div className="writeMessage">
            {fetchedMessage.map((fm) => {
                return (
                    <>
                        <div className="sender">
                            <div className="senderProfileImg"></div>
                            <div className="senderMessage">{fm.message}</div>
                        </div>

                        <div className="reciever">

                            <div className="recieverMessage">{fm.message_r}  </div>
                            <div className="recieverProfileImg"></div>
                        </div>

                    </>
                )
            })}
            <input type="text" className="messageInput" /><span className="send">Send</span>
        </div>

    );
}

export default WriteMessage;