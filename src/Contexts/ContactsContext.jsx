import React, { createContext, useEffect, useState } from 'react'
import { getContactsList } from '../services/contactService'

export const ContactsContext = createContext({
    contacts: [],
    isLoadingContacts: true,
    filteredContacts: [],
    searchContacts: (searchText) => {}
})

const ContactsContextProvider = ({ children }) => {
    
    const [ contacts, setContacts ] = useState([])
    const [ isLoadingContacts, setIsloadingContacts ] = useState(true)
    const [ filteredContacts, setFilteredContacts ] = useState([])

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
            setFilteredContacts(contactsList)
        }
        const timeout = setTimeout(fetchContacts, 1000)

        return () => clearTimeout(timeout)
    }, [])

    const searchContacts = (searchText) => {
        if (!searchText.trim()) {
            setFilteredContacts(contacts)
            return
        }

        const lowered = searchText.toLowerCase()

        const filtered = contacts.filter((contact) => {
            const nameMatch = contact.name.toLowerCase().includes(searchText.toLowerCase())
            const messagesMatch = contact.messages?.some(
                (msg) => msg.text.toLowerCase().includes(searchText.toLowerCase())
            )
            return nameMatch || messagesMatch
        })

        setFilteredContacts(filtered)
    }

    return (
        <ContactsContext.Provider
            value={
                {
                    contacts: contacts,
                    isLoadingContacts: isLoadingContacts,
                    filteredContacts: filteredContacts,
                    searchContacts: searchContacts
                }
            }
        >
            {children}
        </ContactsContext.Provider>
    )
}

export default ContactsContextProvider