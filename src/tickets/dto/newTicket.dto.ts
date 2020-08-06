import { TicketStatus } from "./ticket.entity";
import { ApiProperty } from "@nestjs/swagger";

export class NewTicketDto{
  ticketHeader: string;
  ticketBody: string;

  @ApiProperty({type: () => [Number]})
  assignedUsers?: [{userId: number}];
  
  assignedCustomer: {customerId: number};
  ticketStatus: TicketStatus;
}