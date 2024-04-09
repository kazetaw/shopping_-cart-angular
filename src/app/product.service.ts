import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  // ตัวอย่างข้อมูลสินค้า
  products = [
    { id: 1, name: 'iPad Air', imageUrl:'/assets/product/air.png', type: 'Tablet', decript: 'Serious performance in a thin and light design.', price: 55.25 },
    { id: 2, name: 'iPad Pro', imageUrl:'/assets/product/pro.png', type: 'Tablet', decript: 'The ultimate iPad experience with the most advanced technology.', price: 65.95 },
    { id: 3, name: 'iPad mini', imageUrl:'/assets/product/mini.png', type: 'Tablet', decript: 'Serious performance in a thin and light design.', price: 95.65 },
    { id: 4, name: 'iPhone 15 Pro', imageUrl:'/assets/product/15pro.png', type: 'Smartphone', decript: 'The ultimate iPhone.', price: 82.52 },
    { id: 5, name: 'iPhone 15', imageUrl:'/assets/product/15.png', type: 'Smartphone', decript: 'A total powerhouse.', price: 64.35 },
    { id: 6, name: 'Macbook', imageUrl:'/assets/product/mac.png', type: 'Laptop', decript: 'The most advanced Mac laptops for demanding workflows.', price: 25.35 },
  
  ];
    constructor(private http: HttpClient) { }
  
    getProductById(id: number) {
      const product = this.products.find(x => x.id === id)
      // console.log("🚀 ~ ProductService ~ getProductById ~ product:", product)
      return product
    }
  }

  // getProductById(id: number): Observable<any> {
  //   const product = this.products.find(item => item.id === id);
  //   return of(product); // ส่งค่ากลับในรูปแบบของ Observable
  // }

  // getProducts(): any[] {
  //   return this.products;
  // }
  

