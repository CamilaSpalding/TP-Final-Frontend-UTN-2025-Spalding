import React, { createContext, useEffect, useState } from 'react'
import { getContactsList } from '../services/contactService'

export const ContactsContext = createContext({
    contacts: [],
    isLoadingContacts: true,
    filteredResults: {
        chats: [],
        contacts: [],
        groups: [],
        messages: []
    },
    /* filteredContacts: [], */
    searchContacts: (searchText) => {}
})

const ContactsContextProvider = ({ children }) => {
    
    const [ contacts, setContacts ] = useState([])
    const [ isLoadingContacts, setIsloadingContacts ] = useState(true)
    const [ isSearching, setIsSearching ] = useState(false)
    /* const [ filteredContacts, setFilteredContacts ] = useState([]) */

    const [ filteredResults, setFilteredResults ] = useState({
        chats: [],
        contacts: [],
        groups: [],
        messages: []
    })

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
            /* setFilteredContacts(contactsList) */
        }
        const timeout = setTimeout(fetchContacts, 1000)
        return () => clearTimeout(timeout)
    }, [])

    const searchContacts = (searchText) => {

        setIsSearching(true)

        const lowered = searchText.toLowerCase()

        const chats = []
        const contactsOnly = []
        const groups = []
        const messages = []

        contacts.forEach(contact => {
            const hasMessages = contact.messages && contact.messages.length > 0
            const nameMatches = contact.name.toLowerCase().includes(lowered)

            /* Para la búsqueda de CHATS inicializados que coincida el nombre del contacto con el valor ingresado */
            if (nameMatches && hasMessages) {
                chats.push(contact)

                /* Para que la búsqueda muestre los GRUPOS en común del contacto CON chat inicializado que coincida con el valor ingresado */
                if (contact.groups && contact.groups.length > 0) {
                    const matchedGroups = contact.groups.filter(group =>
                        group.name.toLowerCase().includes(lowered)
                    )
                    groups.push(...matchedGroups)
                }
            }

            /* Para la búsqueda de CONTACTOS SIN chats inicializados que coincidan con el valor ingresado */
            else if (nameMatches && !hasMessages) {
                contactsOnly.push(contact)
            }

            /* Para la búsqueda de MENSAJES que coincidan con el valor ingresado. */
            if (hasMessages) {
                const matchedMessages = contact.messages.filter(msg =>
                    msg.text.toLowerCase().includes(lowered)
                ).map(msg => ({
                    ...msg,
                    contact_id: contact.id,
                    contact_name: contact.name,
                    profile_pic: contact.profile_pic,
                    sent_time: msg.sent_time
                }))

                messages.push(...matchedMessages)
            }
        })

        messages.sort((a, b) => {
            const timeA = a.sent_time
            const timeB = b.sent_time

            return timeB.localeCompare(timeA)
        })

        setFilteredResults({
            chats: chats,
            contacts: contactsOnly,
            groups: groups,
            messages: messages
        })

        setIsSearching(false)
    }

    return (
        <ContactsContext.Provider
            value={
                {
                    contacts: contacts,
                    isLoadingContacts: isLoadingContacts,
                    /* filteredContacts: filteredContacts, */
                    filteredResults: filteredResults,
                    searchContacts: searchContacts
                }
            }
        >
            {children}
        </ContactsContext.Provider>
    )
}

export default ContactsContextProvider