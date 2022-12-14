import React, { useState } from 'react'

import MenuItem from './MenuItem'
import Job from './Job'
import FilterField from './FilterField'
import TagList from './TagList'

import { CSS_PREFIX } from '../constants'
import { printPage, filterBy, getPeriodText, getTotalPeriod } from '../utils'

import emailIcon from '../icons/email.svg'
import telegramIcon from '../icons/telegram.svg'
import gitHubIcon from '../icons/github.svg'
import downloadIcon from '../icons/download.svg'

import { CVData } from '../types'

const CV = ({ general, skills, jobs }: CVData): JSX.Element => {
    const [ filteredSkills, setSkills ] = useState(skills)
    const [ printModeCls, setPrintMode ] = useState('')

    const print = () => { setPrintMode(`${CSS_PREFIX}print-mode`); setTimeout(printPage, 0) }

    const totalExperience = getPeriodText(getTotalPeriod(
        jobs.map(job => ({ startDate: job.startDate, endDate: job.endDate }))
    ))

    const { name, surname, title, email, country, city } = general

    return (
        <main className={`${CSS_PREFIX}container ${printModeCls}`}>

            <article className={`${CSS_PREFIX}general`}>
                <img className={`${CSS_PREFIX}avatar`} src='avatar.png'></img>
                <header className={`${CSS_PREFIX}name`}>{name} {surname}</header>
                <span className={`${CSS_PREFIX}title`}>{title}</span>
                <address className={`${CSS_PREFIX}address`}>
                    <a href='mailto:'>{email}</a><br/>
                    {city}, {country}
                </address>
            </article>

            <article className={`${CSS_PREFIX}additional`}>
                <MenuItem icon={emailIcon}>Send me an email</MenuItem>
                <MenuItem icon={telegramIcon}>Find me on Telegram</MenuItem>
                <MenuItem icon={gitHubIcon}>Visit my GitHub</MenuItem>
                <MenuItem icon={downloadIcon} handler={print}>Download PDF</MenuItem>
            </article>

            <article className={`${CSS_PREFIX}card ${CSS_PREFIX}jobs`}>
                <header>
                    <span>Employment History</span>
                    <div className={`${CSS_PREFIX}label`}>{totalExperience}</div>
                </header>
                { jobs.map(jobData =>
                    <Job
                        key={jobData.company}
                        company={jobData.company}
                        title={jobData.title}
                        startDate={jobData.startDate}
                        endDate={jobData.endDate}
                        description={jobData.description}
                    />
                )}
            </article>

            <article className={`${CSS_PREFIX}card ${CSS_PREFIX}skills`}>
                <header>Skills</header>
                <FilterField data={skills} filterFn={filterBy} callback={setSkills}/>
                <TagList tags={filteredSkills}/>
            </article>

            <article className={`${CSS_PREFIX}card ${CSS_PREFIX}education`}>
                <header>Education</header>
                <strong>Sevastopol National Technical University</strong><br/>
                Informatics and Computer Engineering<br/>
                2012
            </article>

        </main>
    )
}

export default CV
