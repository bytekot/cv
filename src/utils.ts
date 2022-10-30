export const downloadCV = () => window.print();

export const filterBy = (data: string[], key: string): string[] =>
    data.filter(item => item.toLowerCase().includes(key))
