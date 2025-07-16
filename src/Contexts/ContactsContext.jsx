import React, { createContext, useState } from 'react'
import { getContactList } from '../services/contactService'

export const ContactsContext = createContext({
    contacts: [],
    isLoadingContacts: true
})

const ContactsContextProvider = ({ children }) => {
    
    const [contacts, setContacts] = useState([])
    const [isLoadingContacts, setIsloadingContacts] = useState(true)

    setTimeout(
        () => {
            const contactList = getContactList()
            setContacts(contactList)
            setIsloadingContacts(false)
        },
        1000
    )

    return (
        <ContactsContext.Provider
            value={
                {
                    contacts: contacts,
                    isLoadingContacts: isLoadingContacts
                }
            }
        >
            {children}
        </ContactsContext.Provider>
    )
}

export default ContactsContextProvider