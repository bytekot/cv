import React, { useState } from 'react';
import FilterFieldView from './FilterField/FilterField';
import TagListView from './TagList';

interface CVData {
    basicInfo: {
        name: string,
        surname: string,
        role: string,
        email: string,
        country: string,
        city: string,
    },
    skills: string[],
}

const CVView = ({ basicInfo, skills }: CVData): JSX.Element => {
    const { name, surname, role, email, country, city } = basicInfo;
    const [filteredSkills, setSkills] = useState(skills);

    return (
        <section>
            <article>
                <header>{name} {surname}</header>
                {role}
                <address>
                    <a href="mailto:">{email}</a><br/>
                    {city}, {country}
                </address>
            </article>

            <article>
                <header>Skills</header>
                <FilterFieldView data={skills} callback={setSkills} />
                <TagListView tags={filteredSkills} />
            </article>
        </section>
    )
};

export default CVView;
