import React, { useState } from 'react';

import MenuItem from './MenuItem';
import Job from './Job';
import FilterField from './FilterField';
import TagList from './TagList';

import { CSS_PREFIX } from '../constants';
import { downloadCV } from '../utils';

import emailIcon from '../icons/email.svg';
import telegramIcon from '../icons/telegram.svg';
import gitHubIcon from '../icons/github.svg';
import downloadIcon from '../icons/download.svg';

interface GeneralData {
    name: string
    surname: string
    title: string
    email: string
    country: string
    city: string
}

interface EducationData {
    university: string
    specialization: string
    startDate: string
    endDate: string
    degree: string
}

interface CVData {
    general: GeneralData
    skills: string[]
    jobs: Job[]
    education: EducationData
}

const CV = ({ general, skills, jobs }: CVData): JSX.Element => {
    const { name, surname, title, email, country, city } = general;
    const [filteredSkills, setSkills] = useState(skills);

    return (
        <section>

            <article className={`${CSS_PREFIX}general`}>
                <img className={`${CSS_PREFIX}avatar`} src='avatar.jpeg'></img>
                <header>{name} {surname}</header>
                {title}
                <address>
                    <a href='mailto:'>{email}</a><br/>
                    {city}, {country}
                </address>
            </article>

            <article className={`${CSS_PREFIX}additional`}>
                <MenuItem text='Send me an email' icon={emailIcon}/>
                <MenuItem text='Find me on Telegram' icon={telegramIcon}/>
                <MenuItem text='Visit my GitHub' icon={gitHubIcon}/>
                <MenuItem text='Download this CV' icon={downloadIcon} handler={downloadCV}/>
            </article>

            <article className={`${CSS_PREFIX}card ${CSS_PREFIX}jobs`}>
                <header>Jobs</header>
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
                <FilterField data={skills} callback={setSkills}/>
                <TagList tags={filteredSkills}/>
            </article>

            <article className={`${CSS_PREFIX}card ${CSS_PREFIX}education`}>
                <header>Education</header>
                <strong>Sevastopol National Technical University</strong><br/>
                Informatics and Computer Engineering<br/>
                2012
            </article>

        </section>
    )
};

export default CV;
