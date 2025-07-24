import React, { createContext, useState } from 'react'
import { getMessagesByContactId, getMessagesByGroupId } from '../services/messagesService'

export const MessagesContext = createContext(
    {
        messages: [],
        isMessagesLoading: true,
        loadMessages: (id, type) => {},
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

    const loadMessages = (id, type) => {
        setIsMessagesLoading(true)

        setTimeout(() => {
                /* const messages = getMessagesByContactId(contact_id) 
                setMessages(messages) */
                const fetchedMessages = 
                    type === 'group'
                        ? getMessagesByGroupId(id)
                        : getMessagesByContactId(id)
                
                setMessages(fetchedMessages || [])
                setIsMessagesLoading(false)
            }, 1000)

        /* const messages = getMessagesByContactId(contact_id)
        setMessages(messages) */
    }

    const addNewMessage = (text) => {
        const newMessage = {
            id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
            sender_id: /* currentUser?.id ??  */0,
            sent_time: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }),
            sent_date: new Date().toLocaleDateString('es-AR'),
            text: text,
            status: 'sending'
        }

        /* const previousMessages = [...messages]
        previousMessages.push(newMessage)
        setMessages(previousMessages) */

        /* Para agregar el nuevo mensaje al estado */
        setMessages(prev => [...prev, newMessage])

        // Actualizar a 'sent' después de 1 segundo
        /* setTimeout(() => {
            const updatedMessages = []
            for (const message of messages) {
                if (message.id === newMessage.id) {
                    const updatedMessage = {
                        ...message,
                        status: 'sent'
                    }
                    updatedMessages.push(updatedMessage)
                } else {
                    updatedMessages.push(message)
                }
            }
            setMessages(updatedMessages)
        },
        1000 ) */
        /* CORRECCIÓN */
        setTimeout(() => {
            setMessages(prev =>
                prev.map(msg =>
                    msg.id === newMessage.id ? { ...msg, status: 'sent' } : msg
                )
            )
        }, 1000)



        // Actualizar a 'receives' después de 3 segundos
        /* setTimeout(() => {
            const updatedMessages = []
            for (const message of messages) {
                if (message.id === newMessage.id) {
                    const updatedMessage = {
                        ...message,
                        status: 'received'
                    }
                    updatedMessages.push(updatedMessage)
                } else {
                    updatedMessages.push(message)
                }
            }
            setMessages(updatedMessages)
        },
        3000 ) */

        /* CORRECCIÓN */
        setTimeout(() => {
            setMessages(prev => 
                prev.map(msg =>
                    msg.id === newMessage.id ? { ...msg, status: 'received' } : msg
                )
            )
        }, 3000)
    }
    

    const handleDeleteMessage = (message_id) => {
        /* const updatedMessageList = []
        for (const message of messages) {
            if (message.id !== message_id) {
                updatedMessageList.push(message)
            }
        }
        setMessages(updatedMessageList) */

        setMessages(prev => prev.filter(msg => msg.id !== message_id))
    }

    // AGREGAR FUNCIONES NUEVAS
    // Agregar la función de editar un mensaje:
    const handleEditMessage = (message_id, newText) => {
        
        /* const previousMessages = [...messages]
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

        setMessages(updatedMessages) */

        setMessages(prev =>
            prev.map(msg =>
                msg.id === message_id ? { ...msg, text: newText, edited: true } : msg
            )
        )
    }

    // Agregar la función para marcar visualmente como "eliminado" un mensaje:
    // Para esta función hay que tener un componente donde se muestre cada mensaje
    const handleSoftDeleteMessage = (message_id) => {
        /* const previousMessages = [...messages]
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
    
        setMessages(updatedMessages) */

        setMessages(prev =>
            prev.map(msg => 
                msg.id === message_id
                ? { ...msg, text: 'Mensaje eliminado', deleted: true }
                : msg
            )
        )
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