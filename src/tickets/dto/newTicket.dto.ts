import { TicketStatus } from "./ticket.entity";
import { User } from "../users/dto/user.entity";
import { Customer } from "../customers/customers.entity";

export class NewTicketDto{
  ticketHeader: string;
  ticketBody: string;
  ticketAuthor: User;
  assignedUsers: User[];
  assignedCustomer: Customer;
  ticketStatus: TicketStatus;
}