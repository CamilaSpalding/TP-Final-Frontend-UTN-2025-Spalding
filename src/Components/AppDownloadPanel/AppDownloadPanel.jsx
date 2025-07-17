import React from 'react'
import './AppDownloadPanel.css'

/* Imagen */
import downloadAppImage from '../../assets/images/whatsapp-videocall.png'

/* Icono */
import LockIcon from '../../assets/icons/lock.svg?react'

function AppDownloadPanel() {
    return (
        <section className='app-download-panel'>
            <div className='app-download__content'>
                <img src={downloadAppImage} alt="Imagen de videollamada en whatsapp" className='app-download__image' />

                <h1 className='app-download__title'>Descarga WhatsApp para Mac</h1>

                <p className='app-download__text'>Descarga la aplicación para Mac y haz llamadas con mayor rapidez.</p>

                <button className='app-download__button'>Descargar de App Store</button>
            </div>

            <footer className='app-download__footer'>
                <LockIcon className='app-download__icon' />

                <p className='app-download__text'>Tus mensajes personales están cifrados de extremo a extremo.</p>
            </footer>
        </section>
    )
}

export default AppDownloadPanel