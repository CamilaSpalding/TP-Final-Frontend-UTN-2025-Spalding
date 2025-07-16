import React, { useState } from 'react'
import './Sidebar.css'

/* Iconos en línea */
import ChatsLineIcon from '../../assets/icons/chats-line.svg?react'
import StatusLineIcon from '../../assets/icons/status-line.svg?react'
import ChannelsLineIcon from '../../assets/icons/channels-line.svg?react'
import CommunitiesLineIcon from '../../assets/icons/communities-line.svg?react'
import SettingsLineIcon from '../../assets/icons/settings-line.svg?react'

/* Iconos sólidos */
import ChatsSolidIcon from '../../assets/icons/chats-solid.svg?react'
import StatusSolidIcon from '../../assets/icons/status-solid.svg?react'
import ChannelsSolidIcon from '../../assets/icons/channels-solid.svg?react'
import CommunitiesSolidIcon from '../../assets/icons/communities-solid.svg?react'
import SettingsSolidIcon from '../../assets/icons/settings-solid.svg?react'

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
                        className='sidebar__button sidebar__small-icon-btn'
                        aria-label='Chats'
                        onMouseEnter={() => setHovered(previousState => ({ ...previousState, chats: true }))}
                        onMouseLeave={() => setHovered(previousState => ({ ...previousState, chats: false }))}
                    >
                        { hovered.chats 
                            ? (<ChatsSolidIcon className="sidebar__btn-icon sidebar__small-icon"/>) 
                            : (<ChatsLineIcon className="sidebar__btn-icon sidebar__small-icon"/>)
                        }
                    </button>

                    <button 
                        className='sidebar__button sidebar__small-icon-btn'
                        aria-label='Estados'
                        onMouseEnter={() => setHovered(previousState => ({ ...previousState, status: true }))}
                        onMouseLeave={() => setHovered(previousState => ({ ...previousState, status: false }))}
                    >
                        { hovered.status
                            ? (<StatusSolidIcon className="sidebar__btn-icon sidebar__small-icon"/>) 
                            : (<StatusLineIcon className="sidebar__btn-icon sidebar__small-icon"/>)
                        }
                    </button>

                    <button 
                        className='sidebar__button sidebar__small-icon-btn' 
                        aria-label='Canales'
                        onMouseEnter={() => setHovered(previousState => ({ ...previousState, channels: true }))}
                        onMouseLeave={() => setHovered(previousState => ({ ...previousState, channels: false }))}
                    >
                        { hovered.channels
                            ? (<ChannelsSolidIcon className="sidebar__btn-icon sidebar__small-icon"/>) 
                            : (<ChannelsLineIcon className="sidebar__btn-icon sidebar__small-icon"/>)
                        }
                    </button>

                    <button 
                        className='sidebar__button sidebar__large-icon-btn' 
                        aria-label='Comunidades'
                        onMouseEnter={() => setHovered(previousState => ({ ...previousState, communities: true }))}
                        onMouseLeave={() => setHovered(previousState => ({ ...previousState, communities: false }))}
                    >
                        { hovered.communities
                            ? (<CommunitiesSolidIcon className="sidebar__btn-icon sidebar__large-icon"/>) 
                            : (<CommunitiesLineIcon className="sidebar__btn-icon sidebar__large-icon"/>)
                        }
                    </button>
                </div>

                <div className='sidebar__user-actions sidebar__small-icon-btn'>
                    <button 
                        className='sidebar__button' 
                        aria-label='Ajustes'
                        onMouseEnter={() => setHovered(previousState => ({ ...previousState, settings: true }))}
                        onMouseLeave={() => setHovered(previousState => ({ ...previousState, settings: false }))}
                    >
                        { hovered.settings
                            ? (<SettingsSolidIcon className="sidebar__btn-icon sidebar__small-icon"/>) 
                            : (<SettingsLineIcon className="sidebar__btn-icon sidebar__small-icon"/>)
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