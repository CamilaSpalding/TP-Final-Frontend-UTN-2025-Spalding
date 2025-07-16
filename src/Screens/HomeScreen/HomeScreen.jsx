// Esta página va a ser la ContactScreen
import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ContactsPanel from '../../Components/ContactsPanel/ContactsPanel'
import AppDownloadPanel from '../../Components/AppDownloadPanel/AppDownloadPanel'
import './HomeScreen.css'

function HomeScreen () {
    return (
        <div className='home-screen'>
            <Sidebar />
            <ContactsPanel />
            <AppDownloadPanel />
        </div>
    )
}

export default HomeScreen