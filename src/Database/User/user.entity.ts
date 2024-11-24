
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 256 })
  name: string;

  @Column()
  loginNane: string;

  @Column()
  password: string;

  @Column()
  type: number;

  @Column()
  status: boolean;
}
