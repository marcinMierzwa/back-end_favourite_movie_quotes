import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/SCHEMA/user.schema';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [    
    MongooseModule.forFeature([
    {
      name: User.name,
      schema: UserSchema
    },
  ]), 
],
exports: [UserService]
})
export class UserModule {}
