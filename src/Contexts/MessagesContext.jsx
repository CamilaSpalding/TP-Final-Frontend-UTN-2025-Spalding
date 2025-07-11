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
            id: messages.length + 1, // Rever, buscar una forma de generar IDs que no dependan del orden ni cantidad de mensajes. Que siempre sea único.
            sender: 'Yo',
            sent_time: '21:05', // Rever, buscar una forma de que cargue la fecha real de cuando se envía un mensaje nuevo.
            text: text,
            status: 'no-recibido'
        }

        const cloneMessages = [...messages]
        cloneMessages.push(newMessage)
        setMessages(cloneMessages)
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