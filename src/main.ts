import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { validationsPipe } from './exception/validations.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(validationsPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
