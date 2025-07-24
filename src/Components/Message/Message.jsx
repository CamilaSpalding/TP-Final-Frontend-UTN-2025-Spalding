import React, { useContext, useState } from 'react'
import { MessagesContext } from '../../Contexts/MessagesContext'
import './Message.css'

// Iconos
import SendingClockIcon from '../../assets/icons/msg-sending-clock.svg?react'
import SingleCheckIcon from '../../assets/icons/msg-single-check.svg?react'
import DoubleCheckIcon from '../../assets/icons/msg-double-check.svg?react'
import ChevronDownIcon from '../../assets/icons/chevron-down.svg?react'
import EditIcon from '../../assets/icons/pencil.svg?react'
import DeleteIcon from '../../assets/icons/trash.svg?react'


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
function Message ({id, sender_id, sent_time, text, status, deleted}) {
    
    const { handleDeleteMessage, handleSoftDeleteMessage /* handleEditMessage */ } = useContext(MessagesContext)
    const [ showOptions, setShowOptions ] = useState(false)

    const myMessage = sender_id === 0
    
    const messageClass = myMessage
        ? 'chat-dialog my-message'
        : 'chat-dialog their-message'

    const chatBubbleTailClass = myMessage
        ? 'chat-bubble-tail tail-right'
        : 'chat-bubble-tail tail-left'

    // Se agrega función para seleccionar el icono según el estado
    const iconMap = {
        sending: SendingClockIcon,
        sent: SingleCheckIcon,
        received: DoubleCheckIcon,
        seen: DoubleCheckIcon
    }

    const StatusIcon = myMessage && status ? iconMap[status] : null

    const toggleOptions = () => {
        setShowOptions(previousValue => !previousValue)
    }

    const closeOptions = () => {
        setShowOptions(false)
    }

    const handleDelete = () => {
        closeOptions()
        if (myMessage) {
            handleSoftDeleteMessage(id)
        } else {
            handleDeleteMessage(id)
        }
    }

    // Si el mensaje está eliminado
    /* if (deleted || text === 'Mensaje eliminado') {
        return (
            <div className={`${messageClass} deleted`}>
                <span className='deleted-text'>{text}</span>
                <div className={chatBubbleTailClass}></div>
            </div>
        )
    } */

    const handleEdit = () => {
        closeOptions()
        console.log(`Editar mensaje con ID: ${id}`) // Todavía tengo que hacerle la lógica para editar el mensaje (Popup con el input para editar el mensaje y volver a enviarlo).
    }


    return (
        <div className={messageClass} onMouseLeave={closeOptions}>
            <div className="message-content">
                <span className="message-text">
                    { deleted ? <em>{text}</em> : text}

                    <div className="message-meta">
                        <span className="message-time">{sent_time}</span>
                        
                        { StatusIcon && (
                            <StatusIcon
                                className={`status-icon ${status === 'seen' ? 'blue' : 'gray'}`}
                                aria-label={`Estado del mensaje: ${status}`}
                                title={status}
                            />
                        )}
                    </div>
                </span>

                {/* Chevron y menú de opciones */}
                { !deleted && (
                    <div className="message-actions-wrapper">
                        <button
                            className="options-button"
                            onClick={toggleOptions}
                            aria-label="Show message options"
                        >
                            <ChevronDownIcon />
                        </button>

                        { showOptions && (
                            <div className="message-options-menu">
                                <button onClick={handleEdit}>
                                    <EditIcon />
                                    <span>Editar</span>
                                </button>

                                <button onClick={handleDelete} className="delete-option">
                                    <DeleteIcon />
                                    <span>Eliminar</span>
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className={chatBubbleTailClass}></div>
        </div>
    )
}

export default Message