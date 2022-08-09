import express from 'express';

import { getPosts, createPost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

//localhost:5000/
//https:localhost:5000/posts 

router.get('/', getPosts);
router.post('/', createPost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router; 