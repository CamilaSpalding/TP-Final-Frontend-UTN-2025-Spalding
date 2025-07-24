import React from 'react'
import { Link } from 'react-router'
import { formatTime } from '../../services/dateService'
import './ChatItem.css'

/* Iconos */
import SendingClockIcon from '../../assets/icons/sending-clock.svg?react'
import SingleCheckIcon from '../../assets/icons/single-check.svg?react'
import DoubleCheckIcon from '../../assets/icons/double-check.svg?react'

function ChatItem({ type, data, currentUserId }) {

    if (!data) return null

    const isChat = type === 'chat'
    const isContact = type === 'contact'
    const isGroup = type === 'group'
    const isMessage = type === 'message'


    /* Manejo del contenido según typo de elemento */
    const name = isMessage
        ? data.contact_name || data.group_name
        : data.name

    const profilePic = !isMessage ? data.profile_pic : null

    const lastMessage = (isChat || isGroup) ? data.last_message : null

    const messageText = isMessage
        ? data.text
        : (lastMessage?.text || data.info)


    /* Manejo de los estados de los mensajes enviados por el usuario */
    const isSentByUser = isMessage
        ? data.is_sent_by_user
        : lastMessage?.sender_id === currentUserId

    const messageStatus = isSentByUser
        ? (isMessage ? data.status : lastMessage?.status)
        : null

    /* Manejo del icono según estado del mensaje */
    const iconMap = {
        sending: SendingClockIcon,
        sent: SingleCheckIcon,
        received: DoubleCheckIcon,
        seen: DoubleCheckIcon
    }

    const StatusIcon = isSentByUser && messageStatus ? iconMap[messageStatus] : null


    /* Manejo del horario a mostrar */
    const sentTime = isMessage
        ? data.sent_time
        : lastMessage?.sent_time

    const sentDate = isMessage
        ? data.sent_date
        : lastMessage?.sent_date

    const formattedTime = formatTime(sentTime, sentDate)


    /* Manejo de los mensajes no leidos */
    const unreadMessages = data.unread_messages || 0


    /* Manejo de los URL */
    const linkTo = isGroup
        ? `/group/${data.id}/chat` /* EN REVISIÓN */
        : `/contact/${data.contact_id ?? data.id}/chat`

    
    return (
        <Link to={linkTo} className='chat-item'>
            <div className='chat-item__content'>
                { profilePic && (
                    

                    
                    <img src={profilePic} alt={`${name}'s profile pic`} className='chat-item__profile-pic' />
                )}
                <div className='chat-item__main-content' >
                    <div className='chat-item__top-content' >
                        <span className='chat-item__name'>{name}</span>
                        <span className='chat-item__time'>{formattedTime}</span>
                    </div>

                    <div className='chat-item__bottom-content'>
                        <p className='chat-item__message'>
                            { StatusIcon && (
                                <span>
                                    <StatusIcon className={`chat-item__status-icon ${messageStatus === 'seen' ? 'blue' : 'gray'}`} />
                                </span>
                            )}
                            {messageText}
                        </p>

                        { unreadMessages > 0 && (
                            <div className='chat-item__indicators-container'>
                                <div className='chat-item__unread-msg-badge'>
                                    <span className='chat-item__unread-messages'>{unreadMessages}</span>
                                </div>
                                {/* <span className='chat-item__silenced-icon'></span> */}
                                {/* <span className='chat-item__pinned-icon'></span> */}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default ChatItem