import express from 'express';
import UserController from '../controllers/userController';

const UsersController = new UserController();

const router = express.Router();

router
  .route('/')
  .get(UsersController.getUsers)
  .post(UsersController.createUser);

export default router;
