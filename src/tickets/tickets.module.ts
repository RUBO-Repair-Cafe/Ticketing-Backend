import { Module } from '@nestjs/common';
import { CommentsModule } from './comments/comments.module';
import { UsersModule } from './users/users.module';
import { ImagesModule } from './images/images.module';
import { CustomersModule } from './customers/customers.module';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './dto/ticket.entity';

@Module({
  imports: [CommentsModule,
    UsersModule,
    ImagesModule,
    CustomersModule,
    TypeOrmModule.forFeature([Ticket]),
  ],
  providers: [TicketsService],
  controllers: [TicketsController]
})
export class TicketsModule {}
