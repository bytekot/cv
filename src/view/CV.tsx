import React, { useState } from 'react';
import TextFieldView from './TextField';
import TagListView from './TagList';
import { filterSkillList, Skill } from '../utils';

interface CVProps {
    data: {
        basic: {
            name: string,
            surname: string,
            role: string,
            email: string,
            country: string,
            city: string,
        },
        skills: Skill[],
    },
}

const CVView = ({ data }: CVProps): JSX.Element => {
    const basics = data.basic;
    const skillList = data.skills;
    const [skills, setSkills] = useState(skillList);

    const filterHandler = (event: React.KeyboardEvent): void =>
        setSkills(filterSkillList(skillList, (event.target as HTMLInputElement).value.toLowerCase()))

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
                <TextFieldView handler={filterHandler} emptyText="Filter skills" />
                <TagListView tags={skills} />
            </article>
        </section>
    )
};

export default CVView;
