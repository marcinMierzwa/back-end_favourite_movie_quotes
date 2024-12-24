import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './MODULES/AUTH/auth.module';
import { UserModule } from './MODULES/USER/user.module';
import { MongooseModule } from '@nestjs/mongoose';
// import config from './config/config';



@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
    cache: true,
    // load: [config],
  }), 
  MongooseModule.forRoot('mongodb+srv://marcinmierzwa81:9dnhY8LHu2pCzcDB@quotes.qdnlb.mongodb.net/?retryWrites=true&w=majority&appName=Quotes'), 
  AuthModule, UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
