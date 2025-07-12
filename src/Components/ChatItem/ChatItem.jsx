import React from 'react'
import { Link } from 'react-router'

function ChatItem({ id, name, last_time_connected, profile_pic, last_message, unread_message }) {
    return (
        <Link to={`/contacts/${id}/chat`}>
            <img src={profile_pic} alt={`${name}'s profile image`} />
            <h3>{name}</h3>
            <div>
                {last_message.text}
            </div>
            <span>{unread_message}</span>
            <span>Última conección: {last_time_connected}</span>
        </Link>
    )
}

export default ChatItem