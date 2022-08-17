import express from 'express';

import { signin, signup } from '../controllers/posts.js';

const router = express.Router();

//localhost:5000/
//https:localhost:5000/posts 


router.post('/signin', signin);
router.post('/signup', signup);


export default router; 