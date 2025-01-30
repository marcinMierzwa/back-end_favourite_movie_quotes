import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    optionsSuccessStatus: 200,
    credentials: true
  })
  await app.listen(process.env.PORT ?? 3000);
  console.log(`My server is running on port ${process.env.DATASOURCE_PORT}`);
}
bootstrap();
