import React, { createContext, useState } from 'react'
import { getMessagesByContactId } from '../services/messagesService'

export const MessagesContext = createContext(
    {
        messages: [],
        isMessagesLoading: true,
        loadMessages: (contact_id) => {},
                
    }
)

const MessagesContextProvider = ({ children }) => {
    
    const [messages, setMessages] = useState([])
    const [isMessagesLoading, setIsMessagesLoading] = useState(true)

    const loadMessages = (contact_id) => {
        setIsMessagesLoading(true)

        setTimeout(
            () => {
                const messages = getMessagesByContactId(contact_id)
                setMessages(messages)
                setIsMessagesLoading(false)
            },
            1500
        )

        const messages = getMessagesByContactId(contact_id)
        setMessages(messages)
    }
    
    return (
        <MessagesContext.Provider
            value={
                {
                    messages: messages,
                    isMessagesLoading: isMessagesLoading,
                    loadMessages: loadMessages
                }
            }
        >
            {children}
        </MessagesContext.Provider>
    )
}

export default MessagesContextProvider