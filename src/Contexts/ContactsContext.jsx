import React, { createContext, useEffect, useState } from 'react'
import { getContactsList } from '../services/contactService'

export const ContactsContext = createContext({
    contacts: [],
    isLoadingContacts: true
})

const ContactsContextProvider = ({ children }) => {
    
    const [contacts, setContacts] = useState([])
    const [isLoadingContacts, setIsloadingContacts] = useState(true)

    /* setTimeout(
        () => {
            const contactList = getContactList()
            setContacts(contactList)
            setIsloadingContacts(false)
        },
        1000
    ) */

    useEffect(() => {
        const fetchContacts = () => {
            const contactsList = getContactsList()
            setContacts(contactsList)
            setIsloadingContacts(false)

        }
        const timeout = setTimeout(fetchContacts, 1000)

        return () => clearTimeout(timeout)
    }, [])

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