import { TicketStatus } from "./ticket.entity";
import { User } from "../users/dto/user.entity";

export class UpdateTicketDto{
  readonly ticketId: number;
  ticketHeader?: string;
  ticketBody?: string;
  assignedUsers?: User[];
  ticketStatus?: TicketStatus;
}