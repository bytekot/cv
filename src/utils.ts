export const filterSkillList = (skills: string[], value: string): string[] =>
    skills.filter(skill => skill.toLowerCase().includes(value));
