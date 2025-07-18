import React from 'react'
import './ContactsPanel.css'

/* Componentes */
import ContactsPanelNavbar from '../ContactsPanelNavbar/ContactsPanelNavbar'
import ContactsPanelSearcher from '../ContactsPanelSearcher/ContactsPanelSearcher'
import ChatFilter from '../ChatFilter/ChatFilter'
import AppNotification from '../AppNotification/AppNotification'
import ArchivedMessages from '../ArchivedMessages/ArchivedMessages'
import ChatsList from '../ChatsList/ChatsList'

/* Icono */
import LockIcon from '../../assets/icons/lock.svg?react'

function ContactsPanel () {
    return (
        <section className='contacts-panel'>
            <div className='contacts-panel__nav'>
                <ContactsPanelNavbar />
                <ContactsPanelSearcher />
                <ChatFilter />
                <AppNotification />
            </div>

            <div className='contacts-panel__chats'>
                <ArchivedMessages />
                <ChatsList />

                <div className='contacts-panel__footer-note'>
                    <p className='contacts-panel__footer-text'><span className='contacts-panel__footer-icon-container'><LockIcon className="contacts-panel__footer-icon" /></span> Tus mensajes personales están cifrados de extremo a extremo</p> {/* Acá faltaría un lin en las palabras "cifrados de extremo a extremo." */}
                </div>
            </div>
        </section>
    )
}

export default ContactsPanel