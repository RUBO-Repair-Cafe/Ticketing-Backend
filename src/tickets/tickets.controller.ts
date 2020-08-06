import { Controller, Post, Body, Get, Param, Put, Patch } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { NewTicketDto } from './dto/newTicket.dto';
import { TicketsService } from './tickets.service';
import { Ticket } from './dto/ticket.entity';
import { UpdateTicketDto } from './dto/updateTicket.dto';

@ApiTags('tickets')
@ApiBearerAuth()
@Controller('tickets')
export class TicketsController {

  constructor(
    private _ticketService: TicketsService
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Ticket' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  createOne(@Body() newTicketData: NewTicketDto): Promise<Ticket>{
    return this._ticketService.createOne(newTicketData);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Tickets' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  getAll(): Promise<Ticket[]>{
    return this._ticketService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one Ticket' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  getOne(@Param('id') ticketId: number): Promise<Ticket>{
    return this._ticketService.getOne(ticketId);
  }

  @Patch()
  @ApiOperation({ summary: 'Update one Ticket' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  updateOne(@Body() updateData: UpdateTicketDto): Promise<Ticket>{
    return this._ticketService.updateTicket(updateData);
  }

  @Get(':id/comments')
  @ApiOperation({ summary: 'Gets all comments for the ticket' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getComments(@Param('id') ticketId: string) {
    
  }
}
