import React from 'react'
import { Routes, Route } from 'react-router'
import ContactsContextProvider from './Contexts/ContactsContext'
import MessagesContextProvider from './Contexts/MessagesContext'
import ContactDetailContextProvider from './Contexts/ContactDetailContext'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen'


function App () {

  return (
      <div>
        <Routes>
          <Route 
            path='/'
            element={
              <ContactsContextProvider>
                <HomeScreen />
              </ContactsContextProvider>
            }  
          />

          <Route 
            path='/:type/:id/chat'
            element={
              <MessagesContextProvider>
                <ChatScreen />
              </MessagesContextProvider>
            }  
          />

          <Route 
            path='/:type/:id/detail'
            element={
              <ContactDetailContextProvider>
                <ContactDetailScreen />
              </ContactDetailContextProvider>
            }  
          />
        </Routes>

      </div>
  )
}

export default App
