import React, { createContext, useState } from 'react'
import { getContactList } from '../service/contactService'

export const ContactsContext = createContext({
    contacts: [],
    isLoadingContacts: true
})

const ContactsContextProvider = ({ children }) => {
    const [contacts, setContacts] = useState(
        []
    )

    const [isLoadingContacts, setIsloadingContacts] = useState(true)

    setTimeout(
        () => {
            const contact_list = getContactList()
            setContacts(contact_list)
            setIsloadingContacts(false)
        },
        1000
    )

    return (
        <ContactsContaxt.Provider
            value={
                {
                    contacts: contacts,
                    isLoadingContacts: isLoadingContacts
                }
            }
        >
            {children}
        </ContactsContaxt.Provider>
    )
}

export default ContactsContextProvider