import React, { useContext } from 'react'
import Message from '../Message/Message'
import { MessagesContext } from '../../Contexts/MessagesContext'

function ChatMessages () {

    const { messages } = useContext(MessagesContext)
    if (messages.length === 0){
        return (
            <div>
                <span>No hay mensajes!</span>
            </div>
        )
    }

    return (
        <div>
            {
                messages.map((message) => {
                    return (
                        <Message
                            key={message.id}

                            id={message.id}
                            sender={message.sender}
                            sent_time={message.sent_time}
                            text={message.text}
                            status={message.status}
                        />
                    )
                })
            }
        </div>
    )
}

export default ChatMessages