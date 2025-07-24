import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { MessagesContext } from '../../Contexts/MessagesContext'
import Loader from '../../Components/Loader/Loader'
/* import ChatNavbar from '../../Components/ChatNavbar/ChatNavbar'
import ChatMessages from '../../Components/ChatMessages/ChatMessages'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm' */
import './ChatScreen.css'

function ChatScreen() {
    const { id, type } = useParams()
    const { messages, isMessagesLoading, loadMessages } = useContext(MessagesContext)

    useEffect(() => {
        loadMessages(id,type)
    }, [id, type])

    if (isMessagesLoading) {
        return <Loader />
    }

    return (
        <div className='chat-screen'>
            <h2>Chat con {type} {id}</h2>

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