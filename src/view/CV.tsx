import React, { useState } from 'react';
import FilterFieldView from './FilterField/FilterField';
import TagListView from './TagList';
import { CSS_PREFIX } from '../constants';
import emailIcon from '../icons/email.svg';
import telegramIcon from '../icons/telegram.svg';
import gitHubIcon from '../icons/github.svg';
import downloadIcon from '../icons/download.svg';

interface CVData {
    general: {
        name: string,
        surname: string,
        title: string,
        email: string,
        country: string,
        city: string,
    },

    skills: string[],

    jobs: {
        company: string,
        title: string,
        startDate: string,
        endDate: string,
        description: string,
    }[],

    // education: {
    //     university: string,
    //     specialization: string,
    //     startDate: string,
    //     endDate: string,
    //     degree: string,
    // },
}

const CVView = ({ general, skills, jobs }: CVData): JSX.Element => {
    const { name, surname, title, email, country, city } = general;
    const [filteredSkills, setSkills] = useState(skills);

    return (
        <section>
            <article className={`${CSS_PREFIX}card-elevated ${CSS_PREFIX}general`}>
                <img src='avatar.jpeg'></img>
                <header>{name} {surname}</header>
                {title}
                <address>
                    <a href='mailto:'>{email}</a><br/>
                    {city}, {country}
                </address>
            </article>

            <article className={`${CSS_PREFIX}additional`}>
                <div className={`${CSS_PREFIX}card-elevated`} >
                    <a href=''>
                        <svg viewBox={`${emailIcon.viewBox}`}>
                            <use xlinkHref={`#${emailIcon.id}`} />
                        </svg>
                        <span>Send me an email</span>
                    </a>
                </div>
                <div className={`${CSS_PREFIX}card-elevated`}>
                    <a href=''>
                        <svg viewBox={`${telegramIcon.viewBox}`}>
                            <use xlinkHref={`#${telegramIcon.id}`} />
                        </svg>
                        <span>or write to Telegram.</span>
                    </a>
                </div>
                <div className={`${CSS_PREFIX}card-elevated`} >
                    <a href=''>
                        <svg viewBox={`${gitHubIcon.viewBox}`}>
                            <use xlinkHref={`#${gitHubIcon.id}`} />
                        </svg>
                        <span>Visit my GitHub.</span>
                    </a>
                </div>
                <div className={`${CSS_PREFIX}card-elevated`}>
                    <a href=''>
                        <svg viewBox={`${downloadIcon.viewBox}`}>
                            <use xlinkHref={`#${downloadIcon.id}`} />
                        </svg>
                        <span>Download this CV.</span>
                    </a>
                </div>
            </article>

            <article className={`${CSS_PREFIX}card ${CSS_PREFIX}jobs`}>
                <header>Jobs</header>
                {jobs.map(jobData =>
                    <div key={jobData.company}>
                        <strong>{jobData.company}</strong><br/>
                        {jobData.title}<br/>
                        {jobData.startDate} — {jobData.endDate}
                        <p>{jobData.description}</p>
                    </div>
                )}
            </article>

            <article className={`${CSS_PREFIX}card ${CSS_PREFIX}skills`}>
                <header>Skills</header>
                <FilterFieldView data={skills} callback={setSkills}/>
                <TagListView tags={filteredSkills}/>
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

export default CVView;
