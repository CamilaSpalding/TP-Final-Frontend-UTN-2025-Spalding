import React from 'react'
import './ContactsPanelNavbar.css'

/* Logo */
import WhatsappLogo from '../../assets/logo/whatsapp-wordmark.svg'

/* Iconos */
import NewChatIcon from '../../assets/icons/new-chat.svg'
import HamburgerMenuIcon from '../../assets/icons/hamburger-menu.svg'

function ContactsPanelNavbar() {
    return (
        <header className='contacts-panel-navbar'>
            <div className='contacts-panel-navbar__logo-container'>
                <WhatsappLogo className='contacts-panel-navbar__wa-logo' />
            </div>

            <nav className='contacts-panel-navbar__nav'>
                <button
                    className='contacts-panel-navbar__button'
                    aria-label='Nuevo chat'
                >
                    <NewChatIcon className='contacts-panel-navbar__icon' />
                </button>

                <button
                    className='contacts-panel-navbar__button'
                    aria-label='Menú'
                >
                    <HamburgerMenuIcon className='contacts-panel-navbar__icon' />
                </button>
            </nav>
        </header>
    )
}

export default ContactsPanelNavbar