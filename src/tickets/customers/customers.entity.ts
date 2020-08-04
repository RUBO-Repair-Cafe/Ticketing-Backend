import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Ticket } from "../ticket.entity";

@Entity()
export class Customer{
  @PrimaryGeneratedColumn()
  customerId: number;

  @Column({nullable: false})
  firstName: string;

  @Column({nullable: false})
  lastName: string;

  @Column({nullable: false})
  address: string;

  @Column({nullable: false})
  zip: number;

  @Column({nullable: false})
  city: string;

  @Column({nullable: false})
  email: string;

  @Column({nullable: false})
  phone: string;

  @OneToMany(type => Ticket, ticket => ticket.assignedCustomer)
  tickets: Ticket[];
}
