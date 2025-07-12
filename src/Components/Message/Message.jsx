import React, { useContext } from 'react'
import { MessagesContext } from '../../Contexts/MessagesContext'
import './Message.css'
import SentCheckIcon from '../../assets/icons/sent-check.svg'
import ReceivedCheckIcon from '../../assets/icons/received-check.svg'
import SeenCheckIcon from '../../assets/icons/seen-check.svg'


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

    // Se agrega función para seleccionar el icono según el estado
    const getStatusIcon = (status) => {
        switch (status) {
            case 'sent':
                return SentCheckIcon
            case 'received':
                return ReceivedCheckIcon
            case 'seen':
                return SeenCheckIcon
                default:
                    return null
        }
    }

    const StatusIcon = myMessage ? getStatusIcon(status) : null


    return (
        <div className={messageClass}>
            <div className="message-content">
                <span className="message-text">
                    {text}
                    <div className="message-meta">
                        <span className="message-time">{sent_time}</span>
                        {StatusIcon && (
                            <StatusIcon
                                className={`status-icon status-${status}`}
                                title={`Status: ${status}`}
                                aria-label={`Message status: ${status}`}
                            />
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