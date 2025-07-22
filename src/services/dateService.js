export const formatTime = (timeStr) => {
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
}