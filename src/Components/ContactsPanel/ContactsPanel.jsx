import React from 'react'
import ContactsPanelNavbar from '../ContactsPanelNavbar/ContactsPanelNavbar'
import ContactsPanelSearcher from '../ContactsPanelSearcher/ContactsPanelSearcher'
import ChatFilter from '../ChatFilter/ChatFilter'
import AppNotification from '../AppNotification/AppNotification'
import ArchivedMessages from '../ArchivedMessages/ArchivedMessages'
import ChatsList from '../ChatsList/ChatsList'

function ContactsPanel () {
    return (
        <section className='contacts-panel'>
            <div className='contacts-panel__header'>
                <ContactsPanelNavbar />
                <ContactsPanelSearcher />
                <ChatFilter />
                <AppNotification />
            </div>

            <div className='contacts-panel__main'>
                <ArchivedMessages />
                <ChatsList />
            </div>
        </section>
    )
}

export default ContactsPanel