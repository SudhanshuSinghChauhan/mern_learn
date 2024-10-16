import express from 'express';
import { userController } from '../controllers/user_controller.js';
export const userRoutes = express.Router();

userRoutes.get('/Profile/:userName',userController.profile);

userRoutes.post('/Login',userController.login);
userRoutes.post("/register",userController.register);