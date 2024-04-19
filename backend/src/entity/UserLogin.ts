// src/entities/user-login.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Customer } from './Customer';

@Entity()
export class UserLogin {
  @PrimaryGeneratedColumn()
  u_id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToOne(() => Customer)
  @JoinColumn({ name: 'c_id' })
  customer: Customer;
}
