export type SkillType = 'language' | 'technology';

export interface Skill {
    skillId: number,
    skillName: string,
    skillType: SkillType,
    logo: string
}