// src/entities/customer.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: "customer" })
export class Customer {
  @PrimaryGeneratedColumn()
  c_id: number;

  @Column()
  c_fname: string;

  @Column()
  c_lname: string;

  @Column()
  c_address: string;

  @Column()
  c_country: string;

  @Column()
  c_tel: string;

  @Column()
  c_img: string;

  @Column()
  c_sex: string;

  @Column()
  c_birthday: Date;
}
