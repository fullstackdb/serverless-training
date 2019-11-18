import { Schema } from 'dynamoose';

const DEFAULT_LEVELS = [
  'junior - havent heard',
  'middle - read an article on medium',
  'senior - wrote hello world',
  'architect - participated in 2 sessions trainig',
];

const SkillsSchema = new Schema({
  name: {
    type: String,
    hashKey: true,
  },
  levels: {
    type: [String],
    default: DEFAULT_LEVELS
  }
});

export { DEFAULT_LEVELS, SkillsSchema };

export default SkillsSchema;
