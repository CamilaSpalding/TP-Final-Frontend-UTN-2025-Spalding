import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { MessagesContext } from '../../Contexts/MessagesContext'
import Loader from '../../Components/Loader/Loader'
/* import ChatNavbar from '../../Components/ChatNavbar/ChatNavbar'
import ChatMessages from '../../Components/ChatMessages/ChatMessages'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm' */
import './ChatScreen.css'

function ChatScreen() {
    const { contact_id } = useParams()
    const { messages, isMessagesLoading, loadMessages } = useContext(MessagesContext)

    useEffect(() => {
        loadMessages(contact_id)
    }, [contact_id])

    if (isMessagesLoading) {
        return <Loader />
    }

    return (
        <div className='chat-screen'>
            <h2>Chat con contacto {contact_id}</h2>

            <ul>
                { messages.map ((msg, index) => (
                    <li key={index}>
                        {msg.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ChatScreen