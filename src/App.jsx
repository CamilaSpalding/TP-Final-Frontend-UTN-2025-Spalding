import React from 'react'
import { Routes, Route } from 'react-router'
import ContactsContext from './Contexts/ContactsContext'

function App () {

  return (
      <div>
        <Routes>
          <Route 
            path='/'
            element={
              <ContactContextProvider>
                <HomeScreen />
              </ContactContextProvider>
            }  
          />

          <Route 
            path='/contact/:contact_id/chat'
            element={
              <MessagesContextProvider>
                <ChatScreen />
              </MessagesContextProvider>
            }  
          />

          <Route 
            path='/contact/:contact_id/detail'
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
