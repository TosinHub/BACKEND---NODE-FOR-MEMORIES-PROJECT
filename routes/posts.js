import express from "express";
import * as post from "../controllers/posts.js";

const router = express.Router()


router.get('/',post.getPosts )
router.post('/',post.createPost )
router.patch('/:id',post.updatePost )
router.delete('/:id',post.deletePost )
router.delete('/:id/likePost',post.likePost )








export default router;