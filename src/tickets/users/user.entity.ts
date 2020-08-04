import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToMany } from "typeorm";
import { Image } from "../images/images.entity";
import { Comment } from "../comments/dto/comment.entity";
import { Ticket } from "../ticket.entity";

@Entity()
export class User{
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ nullable: false , unique: true})
  username: string;

  @Column({nullable: false})
  password: string;

  @Column({nullable: false})
  email: string;

  @OneToOne(type => Image)
  @JoinColumn()
  profilePicture: Image

  @OneToMany(type => Comment, comment => comment.author)
  comments: Comment[];

  @OneToMany(type => Ticket, ticket => ticket.ticketAuthor)
  createdTickets: Ticket[];

  @ManyToMany(type => Ticket, ticket => ticket.assignedUsers)
  assignedTickets: Ticket[];
}