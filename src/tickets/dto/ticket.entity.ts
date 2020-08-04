import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { User } from "../users/dto/user.entity";
import { Customer } from "../customers/customers.entity";

export enum TicketStatus{
  CREATED,
  NEEDS_TRIAGE,
  ASSIGNED,
  DOING,
  DONE,
  FAILED
}

@Entity()
export class Ticket{
  @PrimaryGeneratedColumn()
  ticketId: number;

  @Column({nullable: false})
  ticketHeader: string;

  @Column({nullable: false})
  ticketBody: string;

  @ManyToOne(type => User, user => user.createdTickets, {eager: true})
  ticketAuthor: User;

  @ManyToMany(type => User, user => user.assignedTickets, {eager: true})
  @JoinTable()
  assignedUsers: User[];

  @ManyToOne(type => Customer, customer => customer.tickets, {eager: true})
  assignedCustomer: Customer;

  @Column({type: 'enum', enum: TicketStatus, default: TicketStatus.CREATED})
  ticketStatus: TicketStatus;
}