import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './dto/ticket.entity';
import { NewTicketDto } from './dto/newTicket.dto';
import { UpdateTicketDto } from './dto/updateTicket.dto';
import { updateObject } from 'src/updateObject.helper';

@Injectable()
export class TicketsService {

  constructor(
    @InjectRepository(Ticket)
    private _ticketRepo: Repository<Ticket>
  ) {}

  async getOne(ticketId: number): Promise<Ticket>{
    const ticket = await this._ticketRepo.findOne(ticketId);
    if (!ticket){
      throw new NotFoundException();
    }
    return ticket;
  }

  async getAll(): Promise<Ticket[]>{
    const tickets = await this._ticketRepo.find({relations: ['ticketAuthor', 'assignedCustomer']});
    if (!tickets || tickets.length === 0){
      throw new NotFoundException();
    }
    return tickets;
  }

  async createOne(newTicketData: NewTicketDto): Promise<Ticket>{
    const newTicket = this._ticketRepo.create(newTicketData);
    return this._ticketRepo.save(newTicket);
  }

  async updateTicket(updateData: UpdateTicketDto): Promise<Ticket>{
    const ticket = await this.getOne(updateData.ticketId);
    if (!ticket){
      throw new NotFoundException();
    }
    const updated = updateObject(ticket, updateData);
    await this._ticketRepo.save(updated);
    return this.getOne(updateData.ticketId)
  }
}
