import React, { useState } from 'react';
import FilterFieldView from './FilterField/FilterField';
import TagListView from './TagList';
import { CSS_PREFIX } from '../constants';

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
                    <a href="mailto:">{email}</a><br/>
                    {city}, {country}
                </address>
            </article>

            <article className={`${CSS_PREFIX}additional`}>
                <div className={`${CSS_PREFIX}card-elevated`} >
                    <a href=''>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM218 271.7L64.2 172.4C66 156.4 79.5 144 96 144H352c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8zm29.4 26.9L384 210.4V336c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V210.4l136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9z" /></svg>
                        <span>Send me an email</span>
                    </a>
                </div>
                <div className={`${CSS_PREFIX}card-elevated`}>
                    <a href=''>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" /></svg>
                        <span>or write to Telegram.</span>
                    </a>
                </div>
                <div className={`${CSS_PREFIX}card-elevated`} >
                    <a href=''>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                        <span>Visit my GitHub.</span>
                    </a>
                </div>
                <div className={`${CSS_PREFIX}card-elevated`}>
                    <a href=''>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M344 240h-56L287.1 152c0-13.25-10.75-24-24-24h-16C234.7 128 223.1 138.8 223.1 152L224 240h-56c-9.531 0-18.16 5.656-22 14.38C142.2 263.1 143.9 273.3 150.4 280.3l88.75 96C243.7 381.2 250.1 384 256.8 384c7.781-.3125 13.25-2.875 17.75-7.844l87.25-96c6.406-7.031 8.031-17.19 4.188-25.88S353.5 240 344 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z" /></svg>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z" /></svg> */}
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
