import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Repair Cafe Ticket System')
    .setDescription('The API for the Repair Cafe Ticket System')
    .setVersion('1.0')
    .addTag('auth')
    .addTag('comments')
    .addTag('customers')
    .addTag('images')
    .addTag('tickets')
    .addTag('users')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);

  fs.writeFileSync("./swagger-spec.json", JSON.stringify(document, null, '\t'));
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
