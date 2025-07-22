import React from 'react'

/* Iconos */
import SendingClockIcon from '../assets/icons/sending-clock.svg?react'
import SingleCheckIcon from '../assets/icons/single-check.svg?react'
import DoubleCheckIcon from '../assets/icons/double-check.svg?react'

function StatusIcon ({ status }) {
    if (!status) return null

    switch (status) {
        case 'sending':
            return <SendingClockIcon className='message-status-icon gray' />
        case 'sent':
            return <SingleCheckIcon className='message-status-icon gray' />
        case 'received':
            return <DoubleCheckIcon className='message-status-icon gray' />
        case 'seen':
            return <DoubleCheckIcon className='message-status-icon blue' />
        default:
            return null
    }
}

export default StatusIcon


/* .message-status-icon {
    width: 16px;
    height: 16px;
}

.message-status-icon.gray {
    color: #667781;
}

.message-status-icon.blue {
    color: #53bdeb;
} */