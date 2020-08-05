import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CommentsService } from './comments.service';
import { NewCommentDto } from './dto/newComment.dto';
import { Comment } from './dto/comment.entity';

@ApiTags('comments')
@ApiBearerAuth()
@Controller('comments')
export class CommentsController {

  constructor(private _commentsService: CommentsService){}

  @Post()
  @ApiOperation({ summary: 'Create a new Comment' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  createOne(@Body() newCommentData: NewCommentDto): Promise<Comment>{
    return this._commentsService.createComment(newCommentData);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one Comment' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  getAll(@Param('id') commentId: number): Promise<Comment>{
    return this._commentsService.getOne(commentId);
  }
}
