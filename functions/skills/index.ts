import cors from '@koa/cors';
import 'cross-fetch/polyfill';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import router from 'koa-joi-router';
import requestId from 'koa-requestid';

import withServerless from '../../utils/withServerless';
import { create as createSkill, getByName } from './controller';
import * as validation from './validation';

const app = new Koa();
const skills = router();

skills.route({
  method: 'GET',
  path: '/skills/:name',
  validate: validation.getSkillByName,
  handler: getByName,
});

skills.route({
  method: 'POST',
  path: '/skills/',
  validate: validation.createSkill,
  handler: createSkill,
} as any);

app.use(bodyParser());
app.use(requestId());
app.use(cors());
app.use(skills.middleware());

const handler = withServerless(app);

export { handler };
