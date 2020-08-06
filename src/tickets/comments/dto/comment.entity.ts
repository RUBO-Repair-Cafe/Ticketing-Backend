import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "../../users/dto/user.entity";
import { Ticket } from "src/tickets/dto/ticket.entity";
import { TicketsService } from "src/tickets/tickets.service";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  commentId: number;

  @Column({nullable: false})
  comment: string;

  @ManyToOne(type => User, user => user.comments)
  author: User;

  @ManyToOne(type => Ticket, ticket => ticket.comments)
  ticket: Ticket;
}