import express from 'express';

import { getPosts, createPost, likePost, deletePost } from '../controllers/posts.js';

import auth from '../middleware/auth.js';
const router = express.Router();

//localhost:5000/
//https:localhost:5000/posts 

router.get('/', getPosts);
router.post('/',auth, createPost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router; 