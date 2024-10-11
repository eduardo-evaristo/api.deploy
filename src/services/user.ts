import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default class UserServices {
  private User;

  constructor() {
    this.User = prisma.user;
  }

  public async getAllUsers() {
    const data = await this.User.findMany();
    return data;
  }

  public async postUser(name: string, email: string) {
    const data = await this.User.create({ data: { name, email } });
    return data;
  }
}
