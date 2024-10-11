import { NextFunction, Request, Response } from 'express';
import UserServices from '../services/user';
import AppError from '../utils/AppError';

export default class UserController {
  private UserServices;

  constructor() {
    this.UserServices = new UserServices();
    // Bind 'this' to the methods to avoid context loss
    this.getUsers = this.getUsers.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  public async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.UserServices.getAllUsers();
      res.status(200).json({ status: 'success', data });
    } catch (err) {
      console.log(err);
      next(new AppError('Something went wrong', 500));
    }
  }

  public async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email } = req.body;
      await this.UserServices.postUser(name, email);
      res.status(201).json({ status: 'success', message: 'User created' });
    } catch (err) {
      next(new AppError('Something went wrong', 400));
    }
  }
}
