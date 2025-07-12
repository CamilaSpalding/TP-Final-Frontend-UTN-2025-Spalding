import React, { useContext } from 'react'
import { MessagesContext } from '../../Contexts/MessagesContext'

function NewMessageForm () {

    const { addNewMessage } = useContext(MessagesContext)

    const handleSubmitNewMessage = (e) => {
        e.preventDefault()
        let newText = e.target.text.value
        addNewMessage(newText)
        e.target.text.value = ''
    }

    return (
        // Rever formato, mejorarlo.
        <form onSubmit={handleSubmitNewMessage}>
            <div>
                <label htmlFor="text">Nuevo mensaje: </label>
                <textarea name="text" id="text" required></textarea>
            </div>
            <button type='submit'>Enviar mensaje</button>
        </form>
    )
}

export default NewMessageForm