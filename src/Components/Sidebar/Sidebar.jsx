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

/* Imagen perfil */
import userProfilePic from '../../assets/images/user-profile-pic.jpg'

function Sidebar({ activeSection, setActiveSection }) {

    // Este código aún se puede componetizar más? Puedo ver de hacer que los botones sean un componente en sí para no repetir tanto código.
    return (
        <aside className='sidebar'>
            <nav className='sidebar__nav'>
                <div className='sidebar__main-actions'>
                    <button
                        className={`sidebar__button sidebar__small-icon-btn ${activeSection === 'chats' ? 'sidebar__button--active' : ''}`}
                        aria-label='Chats'
                        onClick={() => setActiveSection('chats')}
                    >
                        { activeSection === 'chats'
                            ? (<ChatsSolidIcon className="sidebar__btn-icon sidebar__small-icon"/>) 
                            : (<ChatsLineIcon className="sidebar__btn-icon sidebar__small-icon"/>)
                        }
                    </button>

                    <button 
                        className={`sidebar__button sidebar__small-icon-btn ${activeSection === 'status' ? 'sidebar__button--active' : ''}`}
                        aria-label='Estados'
                        onClick={() => setActiveSection('status')}
                    >
                        { activeSection === 'status'
                            ? (<StatusSolidIcon className="sidebar__btn-icon sidebar__small-icon"/>) 
                            : (<StatusLineIcon className="sidebar__btn-icon sidebar__small-icon"/>)
                        }
                    </button>

                    <button 
                        className={`sidebar__button sidebar__small-icon-btn ${activeSection === 'channels' ? 'sidebar__button--active' : ''}`}
                        aria-label='Canales'
                        onClick={() => setActiveSection('channels')}
                    >
                        { activeSection === 'channels'
                            ? (<ChannelsSolidIcon className="sidebar__btn-icon sidebar__small-icon"/>) 
                            : (<ChannelsLineIcon className="sidebar__btn-icon sidebar__small-icon"/>)
                        }
                    </button>

                    <button 
                        className={`sidebar__button sidebar__large-icon-btn ${activeSection === 'communities' ? 'sidebar__button--active' : ''}`}
                        aria-label='Comunidades'
                        onClick={() => setActiveSection('communities')}
                    >
                        { activeSection === 'communities'
                            ? (<CommunitiesSolidIcon className="sidebar__btn-icon sidebar__large-icon"/>) 
                            : (<CommunitiesLineIcon className="sidebar__btn-icon sidebar__large-icon"/>)
                        }
                    </button>
                </div>

                <div className='sidebar__user-actions'>
                    <button 
                        className={`sidebar__button sidebar__small-icon-btn ${activeSection === 'settings' ? 'sidebar__button--active' : ''}`}
                        aria-label='Ajustes'
                        onClick={() => setActiveSection('settings')}
                    >
                        { activeSection === 'settings'
                            ? (<SettingsSolidIcon className="sidebar__btn-icon sidebar__small-icon"/>) 
                            : (<SettingsLineIcon className="sidebar__btn-icon sidebar__small-icon"/>)
                        }
                    </button>

                    <button 
                        className={`sidebar__button sidebar__profile-btn ${activeSection === 'profile' ? 'sidebar__button--active' : ''}`}
                        aria-label='Perfil'
                        onClick={() => setActiveSection('profile')}
                    >
                        <img src={userProfilePic} alt="User profile" className='sidebar__profile-image' />
                    </button>
                </div>

            </nav>
        </aside>
    )
}

export default Sidebar