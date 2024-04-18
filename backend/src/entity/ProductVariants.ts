// src/entities/product-variants.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './Product';
import { Color } from './Color';

@Entity({ name: "product_variants" })
export class ProductVariants {
  @PrimaryGeneratedColumn()
  v_id: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'p_id' })
  product: Product;

  @ManyToOne(() => Color)
  @JoinColumn({ name: 'color_id' })
  color: Color;

  @Column()
  v_price: number;
}
