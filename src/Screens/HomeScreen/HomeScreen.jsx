// Esta página va a ser la ContactScreen
import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ContactsPanel from '../../Components/ContactsPanel/ContactsPanel'
import AppDownloadPanel from '../../Components/AppDownloadPanel/AppDownloadPanel'
import UnderConstruction from '../../Components/UnderConstruction/UnderConstruction'
import './HomeScreen.css'

function HomeScreen () {
    const [ activeSection, setActiveSection ] = useState('chats')

    /* Renderizar el contenido dinámico según el botón que esté activo */
    const renderMainContent = () => {
        switch (activeSection) {
            case 'chats':
                return (
                    <>
                        <ContactsPanel />
                        <AppDownloadPanel />
                    </>
                )
            default:
                return <UnderConstruction section={activeSection} />

        }
    }

    return ( 
        /* Código anterior */
        /* <div className='home-screen'>
            <Sidebar />
            <ContactsPanel />
            <AppDownloadPanel />
        </div> */

        /* Nueva estructura de código con las nuevas adaptaciones (que cada botón del sidebar tenga funcionalidad) */
        <div className='home-screen'>
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
            {renderMainContent()}
        </div>
    )
}

export default HomeScreen