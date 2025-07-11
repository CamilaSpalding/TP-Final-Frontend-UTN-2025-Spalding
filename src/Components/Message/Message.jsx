import React, { useContext } from 'react'
import { MessagesContext } from '../../Contexts/MessagesContext'

// FORMA VISTA EN CLASE
/* function Message({id, sender, sent_time, text, status}) {

    const { handleDeleteMessage } = useContext(MessagesContext)

    const classNames = 
    return (
        <div>
            
        </div>
    )
}

export default Message */

// MI MANERA
function Message ({id, sender, sent_time, text, status}) {
    const { handleSoftDeleteMessage } = useContext(MessagesContext)
}