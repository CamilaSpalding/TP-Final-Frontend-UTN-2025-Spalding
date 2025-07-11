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
        </Routes>

      </div>
  )
}

export default App
