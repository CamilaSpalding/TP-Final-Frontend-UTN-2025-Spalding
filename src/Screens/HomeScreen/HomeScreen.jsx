// Esta página va a ser la ContactScreen
import React from 'react'
import ChatList from '../../Components/ChatsList/ChatsList'
import './HomeScreen.css'

function HomeScreen () {
    return (
        <div>
            <ChatList /> {/* Anteriormente llamado ContactList */}
        </div>
    )
}

export default HomeScreen