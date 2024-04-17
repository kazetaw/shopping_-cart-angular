import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {


  private apiUrl = 'http://localhost:5432/api/data'; // ตั้งค่า URL ของ API ของคุณที่จะดึงข้อมูล



  // ตัวอย่างข้อมูลสินค้า
  products = [
    {
      id: 1,
      name: 'Apple iPad Air (Gen 5th) WIFI 64GB',
      imageUrl: '/assets/product/air.png',
      type: 'Tablet',
      decript: 'Serious performance in a thin and light design.',
      price: 55.25,
      color:['red', 'black', 'pink', 'dark-purple'] // เพิ่มสีน้ำเงินลงไปที่นี่
    },
    {
      id: 2,
      name: 'Apple iPad Pro (4th Gen) Wi-Fi 256GB',
      imageUrl: '/assets/product/pro.png',
      type: 'Tablet',
      decript:
        'The ultimate iPad experience with the most advanced technology.',
      price: 65.95,
      color: ['red', 'black', 'pink'],
    },
    {
      id: 3,
      name: 'Apple iPad Mini 6 (2021) Wi-Fi 256GB',
      imageUrl: '/assets/product/mini.png',
      type: 'Tablet',
      decript: 'Serious performance in a thin and light design.',
      price: 95.65,
      color: ['red', 'black','gold'],
    },
    {
      id: 4,
      name: 'Apple iPhone 15 Pro 256GB',
      imageUrl: '/assets/product/15pro.png',
      type: 'Smartphone',
      decript: 'The ultimate iPhone.',
      price: 82.52,
      color: ['red', 'gold', 'pink'],
    },
    {
      id: 5,
      name: 'Apple iPhone 15 64GB',
      imageUrl: '/assets/product/15.png',
      type: 'Smartphone',
      decript: 'A total powerhouse.',
      price: 64.35,
      color: ['red', 'black', 'pink'],
    },
    {
      id: 6,
      name: 'MacBook Pro 8GB',
      imageUrl: '/assets/product/mac.png',
      type: 'Laptop',
      decript:
        'Apple M3 chip with 8‑core CPU and 10‑core GPU 8GB Storang 256GB The most advanced Mac laptops for demanding workflows.',
      price: 25.35,
      color: ['red', 'black','yellow'],
    },
  ];
  constructor(private http: HttpClient) {}

  getProductById(id: number) {
    const product = this.products.find((x) => x.id === id);
    // console.log("🚀 ~ ProductService ~ getProductById ~ product:", product)
    return product;
  }
}

// getProductById(id: number): Observable<any> {
//   const product = this.products.find(item => item.id === id);
//   return of(product); // ส่งค่ากลับในรูปแบบของ Observable
// }

// getProducts(): any[] {
//   return this.products;
// }
