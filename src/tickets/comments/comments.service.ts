import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewCommentDto } from './dto/newComment.dto';
import { Comment } from './dto/comment.entity';
import { Ticket } from '../dto/ticket.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment) private _commentRepo: Repository<Comment>,
    @InjectRepository(Ticket) private _ticketRepo: Repository<Ticket>
  ) {}

  async getOne(commentId: number): Promise<Comment>{
    return this._commentRepo.findOne(commentId);
  }

  async createComment(newCommentData: NewCommentDto): Promise<Comment>{
    const ticket = await this._ticketRepo.findOne(newCommentData.ticket.ticketId);
    if (!ticket){
      throw new NotFoundException();
    }
    const newComment = this._commentRepo.create(newCommentData);
    const data = await this._commentRepo.save(newComment);
    return this.getOne(data.commentId);
  }
}
