import React, { createContext, useState } from 'react'
import { getMessagesByContactId } from '../services/messagesService'

export const MessagesContext = createContext(
    {
        messages: [],
        isMessagesLoading: true,
        loadMessages: (contact_id) => {},
        addNewMessage: (text) => {},
        handleDeleteMessage: (message_id) => {}

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

    const addNewMessage = (text) => {
        const newMessage = {
            id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
            sender: 'Yo',
            sent_time: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }),
            text: text,
            status: 'no-recibido'
        }

        const previousMessages = [...messages]
        previousMessages.push(newMessage)
        setMessages(previousMessages)
    }

    const handleDeleteMessage = (message_id) => {
        const updatedMessageList = []
        for (const message of messages) {
            if (message.id !== message_id) {
                updatedMessageList.push(message)
            }
        }
        setMessages(updatedMessageList)
    }
    
    return (
        <MessagesContext.Provider
            value={
                {
                    messages: messages,
                    isMessagesLoading: isMessagesLoading,
                    loadMessages: loadMessages,
                    addNewMessage: addNewMessage,
                    handleDeleteMessage: handleDeleteMessage
                }
            }
        >
            {children}
        </MessagesContext.Provider>
    )
}

export default MessagesContextProvider