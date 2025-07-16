import React, { useState } from 'react'
import './Sidebar.css'

/* Iconos en línea */
import ChatsLineIcon from '../../assets/icons/chats-line.svg'
import StatusLineIcon from '../../assets/icons/status-line.svg'
import ChannelsLineIcon from '../../assets/icons/channels-line.svg'
import CommunitiesLineIcon from '../../assets/icons/communities-line.svg'
import SettingsLineIcon from '../../assets/icons/settings-line.svg'

/* Iconos sólidos */
import ChatsSolidIcon from '../../assets/icons/chats-solid.svg'
import StatusSolidIcon from '../../assets/icons/status-solid.svg'
import ChannelsSolidIcon from '../../assets/icons/channels-solid.svg'
import CommunitiesSolidIcon from '../../assets/icons/communities-solid.svg'
import SettingsSolidIcon from '../../assets/icons/settings-solid.svg'

function Sidebar() {

    const [ hovered, setHovered ] = useState({
        chats: false,
        status: false,
        channels: false,
        communities: false,
        settings: false
    })

    // Este código aún se puede componetizar más? Puedo ver de hacer que los botones sean un componente en sí para no repetir tanto código.

    return (
        <aside className='sidebar'>
            <nav className='sidebar__nav'>
                <div className='sidebar__main-actions'>
                    <button
                        className='sidebar__button'
                        aria-label='Chats'
                        onMouseEnter={() => setHovered(previousState => ({ ...previousState, chats: true }))}
                        onMouseLeave={() => setHovered(previousState => ({ ...previousState, chats: true }))}
                    >
                        { hovered.chats 
                            ? (<ChatsSolidIcon className="sidebar__btn-icon"/>) 
                            : (<ChatsLineIcon className="sidebar__btn-icon"/>)
                        }
                    </button>

                    <button 
                        className='sidebar__button'
                        aria-label='Estados'
                        onMouseEnter={() => setHovered(previousState => ({ ...previousState, status: true }))}
                        onMouseLeave={() => setHovered(previousState => ({ ...previousState, status: true }))}
                    >
                        { hovered.status
                            ? (<StatusSolidIcon className="sidebar__btn-icon"/>) 
                            : (<StatusLineIcon className="sidebar__btn-icon"/>)
                        }
                    </button>

                    <button 
                        className='sidebar__button' 
                        aria-label='Canales'
                        onMouseEnter={() => setHovered(previousState => ({ ...previousState, channels: true }))}
                        onMouseLeave={() => setHovered(previousState => ({ ...previousState, channels: true }))}
                    >
                        { hovered.channels
                            ? (<ChannelsSolidIcon className="sidebar__btn-icon"/>) 
                            : (<ChannelsLineIcon className="sidebar__btn-icon"/>)
                        }
                    </button>

                    <button 
                        className='sidebar__button' 
                        aria-label='Comunidades'
                        onMouseEnter={() => setHovered(previousState => ({ ...previousState, communities: true }))}
                        onMouseLeave={() => setHovered(previousState => ({ ...previousState, communities: true }))}
                    >
                        { hovered.communities
                            ? (<CommunitiesSolidIcon className="sidebar__btn-icon"/>) 
                            : (<CommunitiesLineIcon className="sidebar__btn-icon"/>)
                        }
                    </button>
                </div>

                <div className='sidebar__user-actions'>
                    <button 
                        className='sidebar__button' 
                        aria-label='Ajustes'
                        onMouseEnter={() => setHovered(previousState => ({ ...previousState, settings: true }))}
                        onMouseLeave={() => setHovered(previousState => ({ ...previousState, settings: true }))}
                    >
                        { hovered.settings
                            ? (<SettingsSolidIcon className="sidebar__btn-icon"/>) 
                            : (<SettingsLineIcon className="sidebar__btn-icon"/>)
                        }
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