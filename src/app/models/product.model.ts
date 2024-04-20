export class ProductVariants{
    v_id!: number | 0
    v_price:number | undefined
    product:Product | undefined
    color:Color | undefined
  }
export class Product {
    p_id!: number | 0
    p_name:string | undefined
    p_img:string | undefined
    p_descript:string | undefined
    stock:number | undefined
}
export class Color{
    color_id!: number | 0
    color_name:string | undefined
    color_modify:string | undefined

}
