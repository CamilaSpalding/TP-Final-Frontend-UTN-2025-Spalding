import React, { createContext, useEffect, useState } from 'react'
import { getCurrentUser , getContactsList, getGroupsList } from '../services/contactService'

export const ContactsContext = createContext({
    currentUser: null, 
    contacts: [],
    groups: [],
    isLoadingContacts: true,
    isSearching: false,
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
    
    const [ currentUser, setCurrentUser ] = useState(null)
    const [ contacts, setContacts ] = useState([])
    const [ groups, setGroups ] = useState([])
    const [ isLoadingContacts, setIsLoadingContacts ] = useState(true)
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

        /* const fetchContacts = () => {
            const contactsList = getContactsList()
            setContacts(contactsList)
            setIsloadingContacts(false)
            setFilteredContacts(contactsList)
        }
        const timeout = setTimeout(fetchContacts, 1000)
        return () => clearTimeout(timeout) */

        const timeout = setTimeout(() => {
            const fetchedCurrentUser = getCurrentUser()
            const fetchedContacts = getContactsList()
            const fetchedGroups = getGroupsList()

            setCurrentUser(fetchedCurrentUser)
            setContacts(fetchedContacts)
            setGroups(fetchedGroups)
            setIsLoadingContacts(false)
        }, 1000)

        return () => clearTimeout(timeout)
    }, [])

    const searchContacts = (searchText) => {

        const lowered = searchText.toLowerCase()
        setIsSearching(true)

        const chats = []
        const contactsOnly = []
        const matchedGroups = []
        const matchedMessages = []

        contacts.forEach(contact => {
            const hasMessages = contact.messages && contact.messages.length > 0
            const nameMatches = contact.name.toLowerCase().includes(lowered)

            /* Para la búsqueda de CHATS iniciados que coincida el nombre del contacto con el valor ingresado */
            if (nameMatches && hasMessages) {
                chats.push(contact)

                /* ANTERIOR: Para que la búsqueda muestre los GRUPOS en común del contacto CON chat inicializado que coincida con el valor ingresado */
                /* if (contact.groups && contact.groups.length > 0) {
                    const matchedGroups = contact.groups.filter(group =>
                        group.name.toLowerCase().includes(lowered)
                    )
                    groups.push(...matchedGroups)
                } */
            }

            /* Para la búsqueda de CONTACTOS SIN chats inicializados que coincidan con el valor ingresado */
            else if (nameMatches && !hasMessages) {
                contactsOnly.push(contact)
            }

            /* Para la búsqueda de MENSAJES que coincidan con el valor ingresado. */
            if (hasMessages) {
                /* const matchedMessages = contact.messages.filter(msg =>
                    msg.text.toLowerCase().includes(lowered)
                ).map(msg => ({
                    ...msg,
                    contact_id: contact.id,
                    contact_name: contact.name,
                    profile_pic: contact.profile_pic,
                    sent_time: msg.sent_time
                }))

                messages.push(...matchedMessages) */

                const matched = contact.messages.filter(msg =>
                    msg.text.toLowerCase().includes(lowered)
                ).map(msg => ({
                    ...msg,
                    contact_id: contact.id,
                    contact_name: contact.name,
                    profile_pic: contact.profile_pic,
                    is_sent_by_user: msg.sender_id === currentUser?.id
                }))

                matchedMessages.push(...matched)
            }
        })

        /* Para que la búsqueda muestre los GRUPOS en común del contacto CON chat inicializado que coincida con el valor ingresado */
        groups.forEach(group => {
            const nameMatches = group.name.toLowerCase().includes(lowered)
            const hasMessages = group.messages && group.messages.length > 0

            if (nameMatches && hasMessages) {
                matchedGroups.push(group)
            }

            if (hasMessages) {
                const matched = group.messages.filter(msg =>
                    msg.text.toLowerCase().includes(lowered)
                ).map(msg => ({
                    ...msg,
                    group_id: group.id,
                    group_name: group.name,
                    profile_pic: group.profile_pic,
                    is_sent_by_user: msg.sender_id === currentUser?.id
                }))

                matchedMessages.push(...matched)
            }
        })

        /* messages.sort((a, b) => {
            const timeA = a.sent_time
            const timeB = b.sent_time

            return timeB.localeCompare(timeA)
        }) */

        matchedMessages.sort((a, b) => b.sent_time.localeCompare(a.sent_time))

        /* setFilteredResults({
            chats: chats,
            contacts: contactsOnly,
            groups: groups,
            messages: messages
        }) */
        
        setFilteredResults({
            chats: chats,
            contacts: contactsOnly,
            groups: matchedGroups,
            messages: matchedMessages
        })

        setIsSearching(false)
    }

    return (
        <ContactsContext.Provider
            value={
                {
                    currentUser: currentUser,
                    contacts: contacts,
                    groups: groups,
                    isLoadingContacts: isLoadingContacts,
                    isSearching: isSearching,
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