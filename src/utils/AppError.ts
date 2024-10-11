export default class AppError extends Error {
  public statusCode: number;
  public status: string;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = String(statusCode).startsWith('4') ? 'fail' : 'error';
  }
}
