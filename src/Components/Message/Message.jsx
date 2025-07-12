import React, { useContext } from 'react'
import { MessagesContext } from '../../Contexts/MessagesContext'
import './Message.css'
import CheckSent from '../../assets/icons/check-sent.svg'
import CheckReceived from '../../assets/icons/check-received.svg'
import CheckSeen from '../../assets/icons/check-seen.svg'


// FORMA VISTA EN CLASE
/* function Message({emisor, hora, id, texto, status}) {

    const { handleDeleteMessage } = useContext(MessagesContext)

    const classNames = {
        message: 'chat-dialog'
    }
    if(emisor === 'YO'){
        classNames.message = classNames.message + 'chat-dialog__my-message'
    }

    return (
        <div className={classNames.message}>
            <span>{texto}</span>
            <div>
                <span>{hora}</span>
                <span>ll</span>
                <button onClick={() => {handleDeleteMessage(id)}}>Eliminar</button>
            </div>
        </div>
    )
}

export default Message */

// MI MANERA
function Message ({id, sender, sent_time, text, status}) {
    const { handleDeleteMessage, handleSoftDeleteMessage } = useContext(MessagesContext)

    const myMessage = sender.toLowerCase() === 'yo'
    const messageClass = myMessage
        ? 'chat-dialog my-message'
        : 'chat-dialog their-message'

    const chatBubbleTailClass = myMessage
        ? 'chat-bubble-tail tail-right'
        : 'chat-bubble-tail tail-left'

    const handleDelete = () => {
        if (myMessage) {
            handleSoftDeleteMessage(message_id)
        } else {
            handleDeleteMessage(message_id)
        }
    }

    return (
        <div className={messageClass}>
            <div className="message-content">
                <span className="message-text">
                    {text}
                    <div className="message-meta">
                        <span className="message-time">{sent_time}</span>
                        {myMessage && (
                            <span className="message-status">
                                {status ? '✔✔' : '✔'}
                            </span>
                        )}
                        <button onClick={handleDelete} className="delete-button">
                            Delete
                        </button>
                    </div>
                </span>
            </div>
            <div className={chatBubbleTailClass}></div>
        </div>
    )
}

export default Message