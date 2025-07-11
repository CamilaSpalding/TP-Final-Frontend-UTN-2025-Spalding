import React, { useContext } from 'react'
import { ContactsContext } from '../../Contexts/ContactsContext'
import ContactItem from '../ChatItem/ChatItem'

function ContactList () {
    
    const {contacts, isLoadingContacts} = useContext(ContactsContext) 

    return (
        <div>
            {
                contacts.map(
                    (contact) => {
                        return <ContactItem 
                            key={contact.id}
                        />
                    }
                )
            }
        </div>
    )
}

export default ContactList