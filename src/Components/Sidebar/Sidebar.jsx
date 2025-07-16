import React, { useState } from 'react'
import './Sidebar.css'

/* Iconos en línea */
import ChatsLineIcon from '../../assets/icons/chats-line.svg'

/* Iconos sólidos */
import ChatsSolidIcon from '../../assets/icons/chats-solid.svg'

function Sidebar() {

    const [ hovered, setHovered ] = useState({
        chats: false,
        status: false,
        channels: false,
        communities: false,
        settings: false
    })

    return (
        <aside className='sidebar'>
            <nav className='sidebar__nav'>
                <div className='sidebar__main-actions'>
                    <button className='sidebar__button' aria-label='Chats' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setIsHoveredChats(false)}>
                        {hovered.chats ? <ChatsSolidIcon className="sidebar__btn-icon"/> : <ChatsLineIcon className="sidebar__btn-icon"/>}
                    </button>

                    <button className='sidebar__button' aria-label='Estados'>
                        {/* icono de Estados */}
                    </button>

                    <button className='sidebar__button' aria-label='Canales'>
                        {/* icono de Canales */}
                    </button>

                    <button className='sidebar__button' aria-label='Comunidades'>
                        {/* icono de Comunidades */}
                    </button>
                </div>

                <div className='sidebar__user-actions'>
                    <button className='sidebar__button' aria-label='Ajustes'>
                        {/* icono de Ajustes */}
                    </button>

                    <button className='sidebar__button sidebar__profile-btn' aria-label='Perfil'>
                        <img src="/src/assets/images/user-profile.jpg" alt="User profile" className='sidebar__profile-image' />
                    </button>

                </div>

            </nav>
        </aside>
    )
}

export default Sidebar