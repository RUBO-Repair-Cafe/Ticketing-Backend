import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Repair Cafe Ticket System')
    .setDescription('The API for the Repair Cafe Ticket System')
    .setVersion('1.0')
    .addTag('users')
    .addTag('tickets')
    .addTag('comments')
    .addTag('customers')
    .addTag('images')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
