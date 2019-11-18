import { inspect } from 'util';

import { create as createSkill, get as  getSkillByName } from './models';

const create = async (ctx, next) => {
  try {
    console.log('Create skill start', ctx.request.body);

    const { name } = ctx.request.body;

    const skill = await createSkill(name);

    console.log('Create skill finished', skill);

    ctx.response.body = JSON.stringify({ skill });
    ctx.status = 200;
  } catch (error) {
    console.error('Create skill error', inspect(error));

    ctx.status = error.status || 500;
    ctx.body = error.message;
  } finally {
    await next();
  }
};

const getByName = async (ctx, next) => {
  try {
    console.log('Get skill start', ctx.params);

    const skill = await getSkillByName(ctx.params.name);

    console.log('Get skill finished', skill);

    ctx.body = JSON.stringify({ skill });
    ctx.status = 200;
  } catch (error) {
    console.error('Get skill error', inspect(error));

    ctx.status = error.status || 500;
    ctx.body = error.message;
  } finally {
    await next();
  }
};

export { create, getByName };
