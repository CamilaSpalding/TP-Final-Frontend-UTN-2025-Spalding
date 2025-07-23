/* Revisar esta función */
/* export const formatTime = (timeStr) => {
    if (!timeStr) return ''

    if (/^\d{2}:\d{2}$/.test(timeStr)) return timeStr

    const [ day, month, year ] = timeStr.split('/')
    const messageDate = new Date(`${year}-${month}-${day}`)
    const today = new Date()

    const diffTime = today - messageDate
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return 'Hoy'
    if (diffDays === 1) return 'Ayer'
    if (diffDays <= 6) {
        return messageDate.toLocaleDateString('es-AR', { weekday: 'long' })
    }

    return timeStr
} */

/* Nueva función */
export const formatTime = (sent_time, sent_date) => {
    if (!sent_time || !sent_date) return ''

    const [ day, month, year ] = sent_date.split('/').map(str => parseInt(str, 10))
    const messageDate = new Date(year, month -1, day)

    const now = new Date()

    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

    const diffTime = today - messageDate
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) {
        return sent_time
    }

    if (diffDays === 1) {
        return 'Ayer'
    }

    if (diffDays <= 6) {
        return messageDate.toLocaleDateString('es-AR', { weekday: 'long' })
    }

    return sent_date
}