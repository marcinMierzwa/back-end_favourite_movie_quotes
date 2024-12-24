import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/SCHEMA/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
    ) {}

    async getUsers() {
        return await this.userModel.find();
    }

    async createUser(user) {
        return await this.userModel.create(user);
    }
}
