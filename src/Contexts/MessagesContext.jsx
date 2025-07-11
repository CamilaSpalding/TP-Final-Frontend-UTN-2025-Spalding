import React, { createContext, useState } from 'react'
import { getMessagesByContactId } from '../services/messagesService'

export const MessagesContext = createContext(
    {
        messages: [],
        handleDeleteMessage: (message_id) => {},
    }
)

const MessagesContextProvider = ({ children }) => {
    
    const [messages, setMessages] = useState([])

    const handleDleteMessage = (message_id) => {
        const messageListUpdated = []
        for (const message of messages) {
            if (message.id !== message_id) {
                messageListUpdated.push(message)
            }
        }
        setMessages(messageListUpdated)
    }

    return (
        <MessagesContext.Provider
            value={
                {
                    messages: messages,
                    handleDeleteMessage: handleDleteMessage
                }
            }
        >
        </MessagesContext.Provider>
    )
}

export default MessagesContextProvider