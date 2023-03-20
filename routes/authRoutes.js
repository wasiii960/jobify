import express from "express";
import { register,login,updateUser } from "../controllers/authController.js"
//authentication middleware
import authenticateUser from '../middleware/auth.js'
const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/update-user').patch(authenticateUser,updateUser);

export default router;