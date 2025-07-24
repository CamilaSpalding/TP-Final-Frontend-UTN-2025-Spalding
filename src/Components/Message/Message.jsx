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


function Message ({id, sender_id, sent_time, sent_date, text, status, edited, deleted}) {
    
    const { handleDeleteMessage, handleSoftDeleteMessage /* , handleEditMessage */ } = useContext(MessagesContext)
    const [ showOptions, setShowOptions ] = useState(false)

    const isMyMessage = sender_id === 0
    
    /* const messageClass = myMessage
        ? 'chat-dialog my-message'
        : 'chat-dialog their-message'

    const chatBubbleTailClass = myMessage
        ? 'chat-bubble-tail tail-right'
        : 'chat-bubble-tail tail-left' */

    const messageWrapperClass = `chat-message ${isMyMessage ? 'my-message' : 'their-message'}`
    const bubbleTailClass = `chat-bubble-tail ${isMyMessage ? 'tail-right' : 'tail-left'}`

    // Se agrega función para seleccionar el icono según el estado
    const iconMap = {
        sending: SendingClockIcon,
        sent: SingleCheckIcon,
        received: DoubleCheckIcon,
        seen: DoubleCheckIcon
    }

    const StatusIcon = isMyMessage ? iconMap[status] : null

    /* const toggleOptions = () => {
        setShowOptions(previousValue => !previousValue)
    }

    const closeOptions = () => {
        setShowOptions(false)
    } */

    const handleDelete = () => {
        closeOptions()
        if (isMyMessage) {
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
        <div className={messageWrapperClass} onMouseLeave={() => setShowOptions(false)}>
            <div className="chat-dialog__content">
                <div className="chat-dialog__text-container">
                    <p className="chat-dialog__text">
                        { deleted ? <em>{text}</em> : text}
                    </p>
                </div>

                <div className="chat-dialog__meta-info">
                    <span className="chat-dialog__sent-time">{sent_time}</span>
                    
                    { StatusIcon && (
                        <StatusIcon
                            className={`chat-dialog__status-icon ${status === 'seen' ? 'blue' : 'gray'}`}
                            aria-label={`Estado del mensaje: ${status}`}
                            title={status}
                        />
                    )}
                </div>

                {/* Chevron y menú de opciones */}
                { !deleted && (
                    <div className="chat-dialog__msg-actions-btn-container">
                        <button
                            className="chat-dialog__msg-actions-btn"
                            onClick={toggleOptions}
                            aria-label="Show message options"
                        >
                            <ChevronDownIcon />
                        </button>

                        { showOptions && (
                            <div className="chat-dialog__message-options-menu">
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