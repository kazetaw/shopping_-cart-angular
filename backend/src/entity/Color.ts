// src/entities/color.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: "color" }) // ระบุชื่อตารางที่ต้องการในส่วนนี้
export class Color {
  @PrimaryGeneratedColumn()
  color_id: number

  @Column()
  color_name: string

  @Column()
  color_modify: number
}
