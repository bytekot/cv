import React, { useState } from 'react';
import FilterField from './FilterField/FilterField';
import TagListView from './TagList';

interface CVData {
    data: {
        basic: {
            name: string,
            surname: string,
            role: string,
            email: string,
            country: string,
            city: string,
        },
        skills: string[],
    },
}

const CVView = ({ data }: CVData): JSX.Element => {
    const basics = data.basic;
    const skillList = data.skills;
    const [skills, setSkills] = useState(skillList);

    return (
        <section>
            <article>
                <header>{basics.name} {basics.surname}</header>
                {basics.role}
                <address>
                    <a href="mailto:">{basics.email}</a><br/>
                    {basics.city}, {basics.country}
                </address>
            </article>

            <article>
                <header>Skills</header>
                <FilterField data={skillList} callback={setSkills} />
                <TagListView tags={skills} />
            </article>
        </section>
    )
};

export default CVView;
