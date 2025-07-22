import React from 'react'
import { Link } from 'react-router'
import { formatTime } from '../../utils/dateUtils'
import './ChatItem.css'

function ChatItem({ type, data, currentUserId }) {

    const isChat = type === 'chat'
    const isContact = type === 'contact'
    const isGroup = type === 'group'
    const isMessage = type === 'message'

    /* Manejo del contenido según typo de elemento */
    const lastMessage = isChat || isGroup
        ? data.last_message
        : null

    const name = isMessage
        ? data.contact_name || data.group_name
        : data.name

    const profilePic = isMessage
        ? data.profile_pic
        : data.profile_pic

    const unreadMessages = data.unread_messages || 0

    /* Manejo del mensaje a mostrar */
    const messageText = isMessage
        ? data.text
        : (lastMessage?.text || (isContact ? data.info : ''))

    const isSentByUser = isMessage
        ? data.is_sent_by_user
        : lastMessage?.sender_id === currentUserId

    const messageStatus = isSentByUser
        ? (lastMessage?.status || (isMessage ? data.status : null))
        : null

    /* Manejo del horario a mostrar */
    const rawTime = isMessage
        ? data.sent_time
        : lastMessage?.sent_time || ''

    const formatTime = (timeStr) => {
        return timeStr /* En proceso */
    }

    /* Manejo de los URL */
    const linkTo = isGroup
        ? `/group/${data.id}`
        : `/chat/${data.contact_id ?? data.id}`

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