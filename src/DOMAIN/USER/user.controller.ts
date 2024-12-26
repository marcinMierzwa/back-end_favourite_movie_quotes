import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Post()
  async createUser(@Body() body: { email: string, password: string }) {
    const { email, password } = body; 
    const user = { email, password };
    return await this.userService.createUser(user);
  }

}

