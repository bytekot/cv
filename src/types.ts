export type GeneralData = {
    name: string
    surname: string
    title: string
    email: string
    country: string
    city: string
}
export type JobData = {
    company: string
    title: string
    startDate: string
    endDate?: string
    description: (string | string[])[]
}
export type EducationData = {
    university: string
    specialization: string
    startDate: string
    endDate: string
    degree: string
}
export type CVData = {
    general: GeneralData
    skills: string[]
    jobs: JobData[]
    education: EducationData
}

declare global {
    interface Window {
        toggleDarkMode: () => boolean
    }
}
export {}
