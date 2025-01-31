import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:4200', 'https://vercel-angular-test-rosy.vercel.app'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
await app.listen(process.env.PORT ?? 3000);
  console.log(`My server is running on port ${process.env.DATASOURCE_PORT}`);
}
bootstrap();
