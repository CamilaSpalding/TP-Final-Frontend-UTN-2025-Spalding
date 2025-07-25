import React from 'react'
import './ContactsPanelNavbar.css'

/* Logo */
import WhatsappLogo from '../../assets/logo/whatsapp-wordmark.svg?react'

/* Iconos */
import NewChatIcon from '../../assets/icons/new-chat.svg?react'
import HamburgerMenuIcon from '../../assets/icons/hamburger-menu.svg?react'

function ContactsPanelNavbar() {
    return (
        <header className='contacts-panel-navbar'>
            <div className='contacts-panel-navbar__logo-container'>
                <h1><WhatsappLogo className='contacts-panel-navbar__wa-logo' /></h1>
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