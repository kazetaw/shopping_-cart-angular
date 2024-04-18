// src/entities/product-type.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: "product_type" })
export class ProductType {
  @PrimaryGeneratedColumn()
  type_id: number

  @Column()
  type_name: string
}
