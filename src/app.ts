import express, { NextFunction, Request, Response } from 'express';
import userRouter from './routes/userRouter';
import AppError from './utils/AppError';
import ErrorHandler from './middleware/ErrorHandler';
const app = express();

app.use(express.json());

//Mounting users route
app.use('/users', userRouter);

//Mounting catch-all route, for undefined routes
app.use('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Route ${req.originalUrl} does not exist.`, 404));
});

//Error handling middleware
app.use(ErrorHandler);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
