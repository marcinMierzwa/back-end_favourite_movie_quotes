import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/config';
import { CommonModule } from './COMMON/common.module';
import { UsersModule } from './DOMAIN/users/users.module';
import { QuotesModule } from './DOMAIN/quotes/quotes.module';



@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
    cache: true,
    load: [config],
  }), 
  MongooseModule.forRoot('mongodb+srv://marcinmierzwa81:9dnhY8LHu2pCzcDB@quotes.qdnlb.mongodb.net/?retryWrites=true&w=majority&appName=Quotes'),
  CommonModule,
  UsersModule,
  QuotesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
