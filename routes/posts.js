import express from "express";
import * as post from "../controllers/posts.js";
import auth from '../middleware/auth.js'

const router = express.Router()

  

router.get('/',post.getPosts )
router.post('/',auth,post.createPost )
router.patch('/:id',auth, post.updatePost )
router.delete('/:id',auth,post.deletePost )
router.delete('/:id/likePost',auth,post.likePost )








export default router;