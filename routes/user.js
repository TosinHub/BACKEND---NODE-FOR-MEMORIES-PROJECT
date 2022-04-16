import express from "express";
import * as user from "../controllers/user.js";

const router = express.Router()



router.post('/signin',user.signin )
router.post('/signup',user.signup)









export default router;