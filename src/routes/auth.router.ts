import express from 'express';
import { supabase } from './../index';
const authRouter = express.Router();

authRouter.post('/sign-up', async (req, res) => {
  const requestUrl = new URL(req.url)
  console.log(requestUrl);
  const { data, error } = await supabase.auth.signUp(
    {
      email: req.body.email,
      password: req.body.password
    }
  )
});

export { authRouter };



































