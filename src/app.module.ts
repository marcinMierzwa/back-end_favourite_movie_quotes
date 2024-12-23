import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import config from './config/config';



@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    cache: true,
    // load: [config],
  })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
