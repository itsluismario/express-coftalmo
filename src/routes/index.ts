import express from 'express'
import { authRouter } from './auth.router';

function routerApi(app: any) {
  const router = express.Router();
  // Global path
  app.use('/api/v1', router);
  router.use('/auth', authRouter);
};

export { routerApi };
