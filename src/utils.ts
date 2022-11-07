export const printPage = (): void => window.print()

export const filterBy = (data: string[], key: string): string[] => (
    data.filter(item => item.toLowerCase().includes(key))
)

export const beautifyDate = (date?: string): string => {
    const dateObj = date ? new Date(date) : new Date()
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ]

    return `${monthNames[dateObj.getMonth()]} ${dateObj.getFullYear()}`
}

export const getPeriodText = (startDate: string, endDate?: string): string => {
    const diffMs = (endDate ? new Date(endDate) : new Date()).getTime() - new Date(startDate).getTime()
    const diffMonths = Math.trunc(diffMs / 2628000000)
    const years = Math.trunc(diffMonths / 12)
    const months = diffMonths % 12
    const getText = (period: string, count: number): string => `${count} ${period}${count > 1 ? 's' : ''}`

    return `${years ? getText('year', years) : ''}${years && months ? ' ' : ''}${months ? getText('month', months) : ''}`
}
