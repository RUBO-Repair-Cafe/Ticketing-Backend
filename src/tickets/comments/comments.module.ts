import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './dto/comment.entity';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { Ticket } from '../dto/ticket.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment, Ticket]),
  ],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
