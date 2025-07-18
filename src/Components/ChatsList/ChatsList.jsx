import React, { useContext } from 'react'
import { ContactsContext } from '../../Contexts/ContactsContext'
import ChatItem from '../ChatItem/ChatItem'
import Loader from '../Loader/Loader'

function ChatsList () {
    
    const { contacts, isLoadingContacts } = useContext(ContactsContext) 
    if (isLoadingContacts) {
        return (
            <Loader />
        )
    }

    return (
        <div>
            ChatsList
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