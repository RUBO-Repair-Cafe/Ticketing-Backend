import { Module } from '@nestjs/common';
import { CommentsModule } from './comments/comments.module';
import { UsersModule } from './users/users.module';
import { ImagesModule } from './images/images.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [CommentsModule, UsersModule, ImagesModule, CustomersModule]
})
export class TicketsModule {}
