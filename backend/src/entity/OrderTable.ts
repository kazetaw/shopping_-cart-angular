// src/entities/order-table.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Customer } from './Customer ';
import { ProductVariants } from './ProductVariants';

@Entity({ name: "order_table" })
export class OrderTable {
  @PrimaryGeneratedColumn()
  order_id: number;

  @Column()
  order_date: Date;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'c_id' })
  customer: Customer;

  @Column()
  order_amount: number;

  @ManyToOne(() => ProductVariants)
  @JoinColumn({ name: 'v_id' })
  productVariant: ProductVariants;
}
