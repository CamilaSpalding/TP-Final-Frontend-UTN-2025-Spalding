import React from 'react'
import { Link } from 'react-router'
import { formatTime } from '../../services/dateService'
import { getMessageStatusIcon } from '../MessageStatusIcon/MessageStatusIcon'
import './ChatItem.css'

function ChatItem({ type, data, currentUserId }) {

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


    /* Manejo de los estados de los mensajes enviados por uno mismo */
    const isSentByUser = isMessage
        ? data.is_sent_by_user
        : lastMessage?.sender_id === currentUserId

    const messageStatus = isSentByUser
        ? (isMessage ? data.status : lastMessage?.status)
        : null

    /* const StatusIcon = getMessageStatusIcon(messageStatus) */


    /* Manejo del horario a mostrar */
    /* const rawTime = isMessage
        ? data.sent_time
        : lastMessage?.sent_time || ''

    const formattedTime = formatTime(rawTime) */
    const sentTime = isMessage
        ? data.sent_time
        : lastMessage?.sent_time

    const sentDate = isMessage
        ? date.sent_date
        : lastMessage?.sent_date

    const formattedTime = formatTime(sentTime, sentDate)

    console.log('⏱️', {
        name,
        sent_time: sentTime,
        sent_date: sentDate,
        formatted: formattedTime
    })

    /* Manejo de los mensajes no leidos */
    const unreadMessages = data.unread_messages || 0


    /* Manejo de los URL */
    const linkTo = isGroup
        ? `/group/${data.id}` /* EN REVISIÓN */
        : `/chat/${data.contact_id ?? data.id}`

    
    return (
        <Link to={linkTo} className='chat-item'>
            { profilePic && (
                <img src={profilePic} alt={`${name}'s profile pic`} className='chat-item__profile-pic' />
            )}
            <div className='chat-item__main-content' >
                <div className='chat-item__top-content' >
                    <strong className='chat-item__name'>{name}</strong>
                    <span className='chat-item__time'>{formattedTime}</span>
                </div>

                <div className='chat-item__bottom-content'>
                    <p className='chat-item__message'>
                        { isSentByUser && StatusIcon && (
                            <span><StatusIcon className={`chat-item__status-icon ${messageStatus === 'seen' ? 'seen' : ''}`} /></span>
                        )}
                        {messageText}
                    </p>

                    { unreadMessages > 0 && (
                        <div className='chat-item__settings-container'>
                            <span className='chat-item__unread-msg-badge'>{unreadMessages}</span>
                            {/* <span className='chat-item__silenced-icon'></span> */}
                            {/* <span className='chat-item__pinned-icon'></span> */}
                        </div>
                    )}
                </div>

            </div>
        </Link>
    )

    /* return (
        <Link to={`/contacts/${id}/chat`}>
            <img src={profile_pic} alt={`${name}'s profile image`} />
            <h3>{name}</h3>
            <div>
                {last_message.text}
            </div>
            <span>{unread_messages}</span>
            <span>Última conección: {last_time_connected}</span>
        </Link>
    ) */
}

export default ChatItem