import { Joi } from 'koa-joi-router';

const skillValidation = Joi.object({
  name: Joi.string(),
  levels: Joi.array().items(Joi.string()),
}).optional();

const getSkillByName = {
  params: {
    name: Joi.string().required(),
  },
  output: {
    200: {
      body: {
        skill: skillValidation,
      },
    },
  },
};

const createSkill = {
  type: 'json',
  body: {
    name: Joi.string().required(),
  },
  output: {
    200: {
      body: {
        skill: skillValidation,
      },
    },
  },
};

export { getSkillByName, createSkill };
