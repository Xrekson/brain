
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 256 })
  name: string;

  @Column()
  loginName: string;

  @Column()
  password: string;

  @Column()
  type: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdTime: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedTime: Date;

  @Column()
  status: boolean;
}
