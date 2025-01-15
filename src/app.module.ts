import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './COMMON/common.module';
import { UsersModule } from './DOMAIN/users/users.module';
import { QuotesModule } from './DOMAIN/quotes/quotes.module';
import { DatabaseModule } from './DATABASE/database.module';
import dbconfig from './DATABASE/config/dbconfig';
import { MoviesModule } from './DOMAIN/movies/movies.module';
import { CharactersModule } from './DOMAIN/characters/characters.module';

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
    MoviesModule,
    CharactersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
