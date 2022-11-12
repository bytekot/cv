import { CSS_PREFIX } from './constants'


export const toggleDarkTheme = (enabled?: boolean): boolean => {
    const darkThemeCls = `${CSS_PREFIX}dark-theme`

    if (typeof enabled === 'boolean') {
        document.body.classList[enabled ? 'add' : 'remove'](darkThemeCls)

        return enabled
    }
    return document.body.classList.toggle(darkThemeCls)
}


export const applySystemTheme = (): boolean => toggleDarkTheme(
    window.matchMedia('(prefers-color-scheme: dark)').matches
)


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


type Period = { years: number, months: number }

const monthsToPeriod = (months: number): Period => {
    const remainingMonths = months % 12

    return {
        years: (months - remainingMonths) / 12,
        months: remainingMonths
    }
}

export const getMonths = (startDate: string, endDate?: string): number => {
    const diffMs = (endDate ? new Date(endDate) : new Date()).getTime() - new Date(startDate).getTime()
    
    return Math.trunc(diffMs / 2628000000)
}

export const getPeriod = (startDate: string, endDate?: string): Period => monthsToPeriod(getMonths(startDate, endDate))

export const getTotalPeriod = (periods: { startDate: string, endDate?: string }[]): Period => monthsToPeriod(
    periods.reduce((total, current): number => total + getMonths(current.startDate, current.endDate), 0)
)

export const getPeriodText = (period: Period): string => {
    const { years, months } = period
    const getText = (period: string, count: number): string => `${count} ${period}${count > 1 ? 's' : ''}`

    return (`
        ${years ? getText('year', years) : ''}
        ${years && months ? ' ' : ''}
        ${months ? getText('month', months) : ''}
    `)
}
