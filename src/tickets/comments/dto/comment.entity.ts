import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "../../users/dto/user.entity";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  commentId: number;

  @Column({nullable: false})
  comment: string;

  @ManyToOne(type => User, user => user.comments)
  author: User;
}