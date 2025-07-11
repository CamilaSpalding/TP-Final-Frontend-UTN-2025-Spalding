import React, { createContext, useState } from 'react'
import { getMessagesByContactId } from '../services/messagesService'

export const MessagesContext = createContext(
    {
        messages: [],
        isMessagesLoading: true,
        loadMessages: (contact_id) => {},
        addNewMessage: (text) => {},
        handleDeleteMessage: (message_id) => {},
        // Funciones nuevas:
        handleEditMessage: (message_id, newText) => {},
        handleSoftDeleteMessage: (message_id) => {}

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

    // AGREGAR FUNCIONES NUEVAS
    // Agregar la función de editar un mensaje:
    const handleEditMessage = (message_id, newText) => {
        
        const previousMessages = [...messages]
        const updatedMessages = []

        for (const mesage of previousMessages) {
            if (message_id.id === message_id) {
                const editedMessage = {
                    ...message,
                    text: newText,
                    edited: true
                }
                updatedMessages.push(editedMessages)
            } else {
                updatedMessages.push(message)
            }
        }

        setMessages(updatedMessages)
    }

    // Agregar la función para marcar visualmente como "eliminado" un mensaje:
    // Para esta función hay que tener un componente donde se muestre cada mensaje
    const handleSoftDeleteMessage = (message_id) => {
        const previousMessages = [...messages]
        const updatedMessages = []
    
        for (const message of previousMessages) {
            if (message.id === message_id) {
                const deletedMessage = {
                    ...message,
                    text: 'Mensaje eliminado',
                    deleted: true
                }
                updatedMessages.push(deletedMessage)
            } else {
                updatedMessages.push(message)
            }
        }
    
        setMessages(updatedMessages)
    }
    
    return (
        <MessagesContext.Provider
            value={
                {
                    messages: messages,
                    isMessagesLoading: isMessagesLoading,
                    loadMessages: loadMessages,
                    addNewMessage: addNewMessage,
                    handleDeleteMessage: handleDeleteMessage,
                    // Funciones nuevas:
                    handleEditMessage: handleEditMessage,
                    handleSoftDeleteMessage: handleSoftDeleteMessage
                }
            }
        >
            {children}
        </MessagesContext.Provider>
    )
}

export default MessagesContextProvider