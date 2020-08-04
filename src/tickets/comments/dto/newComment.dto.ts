import { Ticket } from "src/tickets/dto/ticket.entity";

export class NewCommentDto{
  comment: string;
  ticket: Ticket;
}