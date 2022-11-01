export const printPage = () => window.print()

export const filterBy = (data: string[], key: string): string[] =>
    data.filter(item => item.toLowerCase().includes(key))

export const getDateDiffText = (startDate: string, endDate: string): string => {
    const msDiff = (endDate ? new Date(endDate) : new Date()).getTime() - new Date(startDate).getTime()
    const monthsDiff = Math.trunc(msDiff / 2628000000)

    const years = Math.trunc(monthsDiff / 12)
    const months = monthsDiff % 12

    return `
        ${years
            ? `${years} year${years > 1 ? 's ' : ' '}`
            : ''
        }
        ${months
            ? `${months} month${months > 1 ? 's' : ''}`
            : ''
        }
    `
}
