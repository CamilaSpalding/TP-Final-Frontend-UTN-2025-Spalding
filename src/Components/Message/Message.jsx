import React, { useContext } from 'react'
import { MessagesContext } from '../../Contexts/MessagesContext'
import './Message.css'

// Iconos
import SentCheckIcon from '../../assets/icons/sent-check.svg?react'
import ReceivedCheckIcon from '../../assets/icons/received-check.svg?react'
import SeenCheckIcon from '../../assets/icons/seen-check.svg?react'
import SendingClockIcon from '../../assets/icons/sending-clock.svg?react'
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
function Message ({id, sender, sent_time, text, status}) {
    const { handleDeleteMessage, handleSoftDeleteMessage /* handleEditMessage */ } = useContext(MessagesContext)

    const [ showOptions, setShowOptions ] = useState(false)

    const myMessage = sender.toLowerCase() === 'yo'
    
    const messageClass = myMessage
        ? 'chat-dialog my-message'
        : 'chat-dialog their-message'

    const chatBubbleTailClass = myMessage
        ? 'chat-bubble-tail tail-right'
        : 'chat-bubble-tail tail-left'

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

    const handleEdit = () => {
        closeOptions()
        console.log(`Editar mensaje con ID: ${id}`) // Todavía tengo que hacerle la lógica para editar el mensaje (Popup con el input para editar el mensaje y volver a enviarlo).
    }

    // Se agrega función para seleccionar el icono según el estado
    const getStatusIcon = (status) => {
        switch (status) {
            case 'sending':
                return SendingClockIcon
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
        <div className={messageClass} onMouseLeave={closeOptions}>
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
                </div>
                </span>

                {/* Chevron y menú de opciones */}
                <div className="message-actions-wrapper">
                <button
                    className="options-button"
                    onClick={toggleOptions}
                    aria-label="Show message options"
                >
                    <img src={ChevronDownIcon} alt="More options" />
                </button>

                {showOptions && (
                    <div className="message-options-menu">
                    <button onClick={handleEdit}>
                        <img src={EditIcon} alt="Edit" />
                        <span>Editar</span>
                    </button>
                    <button onClick={handleDelete} className="delete-option">
                        <img src={DeleteIcon} alt="Delete" />
                        <span>Eliminar</span>
                    </button>
                    </div>
                )}
                </div>
            </div>

            <div className={chatBubbleTailClass}></div>
        </div>
    )
}

export default Message