import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.use(cookieParser());
  app.enableCors({
    origin: ['http://localhost:4200', 'https://project-management-frontend-eosin.vercel.app'],
    credentials: true
  });

  const port = configService.get<number>('PORT') || 8000;

  await app.listen(port);
}
bootstrap();
