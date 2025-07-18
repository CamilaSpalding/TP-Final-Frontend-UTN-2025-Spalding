import React, { useContext, useState } from 'react'
import { ContactsContext } from '../../Contexts/ContactsContext'
import './ContactsPanelSearcher.css'

/* Iconos */
import SearchIcon from '../../assets/icons/search.svg?react'
import CloseIcon from '../../assets/icons/close.svg?react'


function ContactsPanelSearcher() {

    const [searchTerm, setSearchTerm] = useState('')
    const { searchContacts } = useContext(ContactsContext)
    
    const handleChange = (e) => {
        const value = e.target.value
        setSearchTerm(value)
        searchContacts(value)
    }

    const clearInput = () => {
        setSearchTerm('')
        searchContacts('')
    }
    
    return (
        <form 
            role='search' 
            action=''
            className='contacts-panel-searcher'
            onSubmit={}
        >
            <label htmlFor="search-input" className='visually-hidden'>
                Buscar un chat o iniciar uno nuevo
            </label>

            <SearchIcon className='contacts-panel-searcher__icon' />
            
            <input 
                type="text" 
                id='searcher-input' 
                placeholder='Buscar un chat o iniciar uno nuevo'
                value={searchTerm}
                onChange={handleChange}
                className='contacts-panel-searcher__input'
            />
            { searchTerm && (
                <button
                    type='button'
                    className='contacts-panel-searcher__clear-btn'
                    onClick={clearInput}
                    aria-label='Limpiar búsqueda'
                >
                    <CloseIcon className='contacts-panel-searcher__clear-icon' />
                </button>
            )}
        </form>
    )
}

export default ContactsPanelSearcher