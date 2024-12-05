
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('items')
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 256 })
  name: string;

  @Column()
  description: string;

  @Column()
  detail: string;

  @Column()
  type: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdTime: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedTime: Date;

  @Column()
  status: boolean;
}
