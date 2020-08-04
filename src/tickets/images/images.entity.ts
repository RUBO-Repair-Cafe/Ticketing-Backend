import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Image{
  @PrimaryGeneratedColumn()
  imageId: number;

  @Column({ nullable: false, unique: true})
  path: string;
}