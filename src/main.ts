import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.DATASOURCE_FRONTEND_URL,
    optionsSuccessStatus: 200,
    credentials: true
  })
  await app.listen(process.env.DATASOURCE_PORT);
  console.log(`My server is running on port ${process.env.DATASOURCE_PORT}`);
}
bootstrap();
