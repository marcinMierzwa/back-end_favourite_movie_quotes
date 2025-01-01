import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.DATASOURE_FRONTEND_URL,
    optionsSuccessStatus: 200,
    credentials: true
  })
  await app.listen(process.env.DATASOURE_PORT);
  console.log(`My server is running on port ${process.env.DATASOURE_PORT}`);
}
bootstrap();
