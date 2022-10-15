import React, { useState } from 'react';
import FilterFieldView from './FilterField/FilterField';
import TagListView from './TagList';
import { CSS_PREFIX } from '../constants';

interface CVData {
    basicInfo: {
        name: string,
        surname: string,
        title: string,
        email: string,
        country: string,
        city: string,
    },
    jobs: {
        company: string,
        title: string,
        startDate: string,
        endDate: string,
        description: string,
    }[],
    skills: string[],
}

const CVView = ({ basicInfo, skills, jobs }: CVData): JSX.Element => {
    const { name, surname, title, email, country, city } = basicInfo;
    const [filteredSkills, setSkills] = useState(skills);

    return (
        <section>
            <article className={`${CSS_PREFIX}basic-info`}>
                <img src='avatar.jpeg'></img>
                <header>{name} {surname}</header>
                {title}
                <address>
                    <a href="mailto:">{email}</a><br/>
                    {city}, {country}
                </address>
            </article>

            <article className={`${CSS_PREFIX}contacts`}>
                <header>Contacts</header>
            </article>

            <article className={`${CSS_PREFIX}jobs`}>
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

            <article className={`${CSS_PREFIX}skills`}>
                <header>Skills</header>
                <FilterFieldView data={skills} callback={setSkills}/>
                <TagListView tags={filteredSkills}/>
            </article>

            <article className={`${CSS_PREFIX}education`}>
                <header>Education</header>
            </article>

        </section>
    )
};

export default CVView;
