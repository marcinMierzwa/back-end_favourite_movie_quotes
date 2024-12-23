import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './MODULES/AUTH/auth.module';
import { UserModule } from './MODULES/USER/user.module';
// import config from './config/config';



@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    cache: true,
    // load: [config],
  }), AuthModule, UserModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
