import React, { useContext } from 'react'
import { ContactsContext } from '../../Contexts/ContactsContext'
import ChatItem from '../ChatItem/ChatItem'
import Loader from '../Loader/Loader'
import './ChatsList.css'

function ChatsList () {
    
    /* const { contacts, isLoadingContacts } = useContext(ContactsContext) 
    if (isLoadingContacts) {
        return (
            <Loader />
        )
    } */

    const { currentUser, contacts, groups, isLoadingContacts, isSearching, filteredResults } = useContext(ContactsContext)

    if (isLoadingContacts) return <Loader />

    /* Corrección */
    const hasFilteredResults = Object.values(filteredResults).some(arr => arr.length > 0)

    /* Renderización de la busqueda del searcher */ /* ESTÁ EN REVICIÓN */
    /* const isSearchActive = Object.values(filteredResults).some(arr => arr.length > 0) */

    /* Mientras el searcher busca resultados */
    if (isSearching) {
        return (
            <div className="chats-list__message">
                Buscando chats, contactos y mensajes...
            </div>
        )
    }

    /* Cuando el searcher encuentre resultados */
    /* if (!isSearchActive && Object.values(filteredResults).flat().length > 0) {
        return (
            <div className='chats-list'>
                {filteredResults.chats.map(chat => (
                    <ChatItem key={`chat-${chat.id}`} type='chat' data={chat} currentUserId={currentUser.id} />
                ))}
                {filteredResults.contacts.map(contact => (
                    <ChatItem key={`contact-${contact.id}`} type='contact' data={contact} currentUserId={currentUser.id} />
                ))}
                {filteredResults.groups.map(group => (
                    <ChatItem key={`group-${group.id}`} type='group' data={group} currentUserId={currentUser.id} />
                ))}
                {filteredResults.messages.map(message => (
                    <ChatItem key={`message-${message.id}-${message.sent_time}`} type='message' data={message} currentUserId={currentUser.id} />
                ))}
            </div>
        )
    } */

    /* CORRECCIÓN */
    if (hasFilteredResults) {
        return (
            <div className='chats-list'>
                { filteredResults.chats.map(chat => (
                    <ChatItem
                        key={`chat-${chat.id}`}
                        type='chat'
                        data={chat}
                        currentUserId={currentUser.id}
                    /> 
                ))}
                {filteredResults.contacts.map(contact => (
                    <ChatItem
                        key={`contact-${contact.id}`}
                        type='contact'
                        data={contact}
                        currentUserId={currentUser.id}
                    />
                ))}
                {filteredResults.groups.map(group => (
                    <ChatItem
                        key={`group-${group.id}`}
                        type='group'
                        data={group}
                        currentUserId={currentUser.id}
                    />
                ))}
                {filteredResults.messages.map(message => (
                    <ChatItem
                        key={`message-${message.id}-${message.sent_time}`}
                        type='message'
                        data={message}
                        currentUserId={currentUser.id}
                    />
                ))}
            </div>
        )
    }


    /* Cuando el searcher no encuentre resultados */
    /* if (!isSearchActive && Object.values(filteredResults).flat().length === 0) {
        return (
            <div className="chats-list__message">
                No se encontró ningún chat, contacto ni mensaje.
            </div>
        )
    } */

    /* CORRECCIÓN */
    if (!hasFilteredResults && !isSearching) {
        return (
            <div className="chats-list__message">
                No se encontró ningún chat, contacto ni mensaje.
            </div>
        )
    }


    /* Estado inicial del ChatsList (previo a la búsqueda) */
    const chats = contacts.filter(c => c.messages && c.messages.length > 0)

    const combinedList = [
        ...chats.map(chat => ({ ...chat, type: 'chat' })),
        ...groups.map(group => ({ ...group, type: 'group' }))
    ]

    const parseDate = (dateStr) => {
        const [d, m, y] = dateStr.split('/')
        
        return [parseInt(y), parseInt(m) - 1, parseInt(d)]
    }

    const getTimestamp = (item) => {
        if (item.type === 'chat' && item.last_message?.sent_date && item.last_message?.sent_time) {
            const [y, m, d] = parseDate(item.last_message.sent_date)
            const [h, min] = item.last_message.sent_time.split(':').map(Number)
            return new Date(y, m, d, h, min).getTime()
        }

        if (item.type === 'group') {
            if (item.last_message?.sent_date && item.last_message?.sent_time) {
                const [y, m, d] = parseDate(item.last_message.sent_date)
                const [h, min] = item.last_message.sent_time.split(':').map(Number)
                return new Date(y, m, d, h, min).getTime()
            }

            if (item.created_date) {
                const [y, m, d] = parseDate(item.created_date)
                return new Date(y, m, d).getTime()
            }
        }

        return 0
    }

    const sortedList = combinedList.sort((a, b) => getTimestamp(b) - getTimestamp(a))


    return (
        <div className='chats-list'>
            { sortedList.map(item => (
                <ChatItem 
                    key={`${item.type}-${item.id}`}
                    type={item.type}
                    data={item}
                    currentUserId={currentUser.id}
                />
            ))}
            
            {/* {
                contacts.map(
                    (contact) => {
                        return <ChatItem 
                            key={contact.id}

                            id={contact.id}
                            name={contact.name}
                            last_time_connected={contact.last_time_connected}
                            profile_pic={contact.profile_pic}
                            last_message={contact.last_message}
                            unread_message={contact.unread_message}
                        />
                    }
                )
            } */}
        </div>
    )
}

export default ChatsList