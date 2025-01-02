import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './COMMON/common.module';
import { UsersModule } from './DOMAIN/users/users.module';
import { QuotesModule } from './DOMAIN/quotes/quotes.module';
import { DatabaseModule } from './DATABASE/database.module';
import dbconfig from './DATABASE/config/dbconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      cache: true,
      load: [dbconfig],
    }),

    CommonModule,
    UsersModule,
    QuotesModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
