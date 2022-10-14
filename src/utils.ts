import rawCVData from './cv.json';

export interface Skill {
    text: string,
    cls: string,
}

interface BasicData {
    name: string,
    surname: string,
    role: string,
    email: string,
    country: string,
    city: string,
}

interface CVData {
    basic: BasicData,
    skills: Skill[],
}

const trasformCVData = (data: { basic: BasicData, skills: {} }): CVData => {
    const rawSkillList = data.skills as any;
    const skillList = [];

    for (const type in rawSkillList) {
        skillList.push(
            ...rawSkillList[type].map((item: string): Skill => ({ text: item, cls: `skill-${type}` })
        ));
    }

    return {
        basic: data.basic,
        skills: skillList,
    };
};

export const filterSkillList = (skills: Skill[], value: string): Skill[] =>
    skills.filter(skill => skill.text.toLowerCase().includes(value));

export const cvData = trasformCVData(rawCVData as any);
