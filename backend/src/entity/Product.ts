// src/entities/product.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Color } from './Color';
import { ProductType } from './ProductType';

@Entity({ name: "product" })
export class Product {
  @PrimaryGeneratedColumn()
  p_id: number

  @Column()
  p_name: string

  @Column()
  p_img: string

  @Column()
  p_descript: string

  @ManyToOne(() => Color)
  @JoinColumn({ name: 'color_id' })
  color: Color;

  @ManyToOne(() => ProductType)
  @JoinColumn({ name: 'type_id' })
  productType: ProductType

  @Column()
  stock: number
}
