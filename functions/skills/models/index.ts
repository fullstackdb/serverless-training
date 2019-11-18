import { model } from 'dynamoose';
import uuid from 'uuid/v4';

import SkillsSchema from './schema';

interface ISkillType {
  name: string;
  levels: Array<string>;
}

console.log('process.env.TABLE_SKILLS', process.env.TABLE_SKILLS);

const SkillsModel = model<ISkillType, ISkillType>(process.env.TABLE_SKILLS, SkillsSchema);

const create = async (skillName: string): Promise<ISkillType> => {
  try {
    const skill = new SkillsModel({ name: skillName } as any as ISkillType);

    return await skill.save() as any as ISkillType;
  } catch (error) {
    throw error;
  }
};

const get = async (skillName): Promise<ISkillType> => {
  try {
    const skill = await SkillsModel.queryOne('name')
      .eq(skillName)
      .exec();

    return skill;
  } catch (error) {
    throw error;
  }
};

export { create, get };
