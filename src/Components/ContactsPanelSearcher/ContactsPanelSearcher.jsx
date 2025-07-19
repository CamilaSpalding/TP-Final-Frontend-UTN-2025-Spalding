import React, { useContext, useState } from 'react'
import { ContactsContext } from '../../Contexts/ContactsContext'
import './ContactsPanelSearcher.css'

/* Iconos */
import SearchIcon from '../../assets/icons/search.svg?react'
import ClearIcon from '../../assets/icons/clear.svg?react'


function ContactsPanelSearcher () {

    const { searchContacts } = useContext(ContactsContext)
    const [ searchText, setSearchText ] = useState('')
    
    const handleChange = (event) => {
        const value = event.target.value
        setSearchText(value)
        searchContacts(value)
    }

    const clearInput = () => {
        setSearchText('')
        searchContacts('')
    }
    
    return (
        <form role='search' className='contacts-panel-searcher'>
            <label htmlFor="search-input" className='visually-hidden'>
                Buscar un chat o iniciar uno nuevo
            </label>

            <SearchIcon className='contacts-panel-searcher__search-icon' />
            
            <input 
                type="text" 
                id='searcher-input' 
                placeholder='Buscar un chat o iniciar uno nuevo'
                value={searchText}
                onChange={handleChange}
                className='contacts-panel-searcher__input'
            />
            { searchText && (
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