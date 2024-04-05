import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  // ตัวอย่างข้อมูลสินค้า
  products = [
    { id: 1, name: 'iPad Air', imageUrl:'https://education.uficon.com/wp-content/uploads/2022/03/iPad_Air_Wi-Fi_Purple_PDP_Image_Position-1b__TH-scaled.jpg', type: 'Tablet', decript: 'ประสิทธิภาพหนักหน่วงในดีไซน์บางเบา', price: 1000 },
    { id: 2, name: 'iPad Pro', imageUrl:'https://res.cloudinary.com/spvi-production/image/upload/f_auto,q_auto,w_820/v1667377390/product/producr-master/TH_iPad_Pro_Wi-Fi_12-9_in_6th_Gen_Space_Gray_PDP_Image_Position-1b_mbyfx6.jpg', type: 'Tablet', decript: 'ที่สุดแห่งประสบการณ์ iPadพร้อมเทคโนโลยีที่ล้ำหน้าที่สุด', price: 1000 },
    { id: 3, name: 'iPad mini', imageUrl:'https://media-cdn.bnn.in.th/140838/iPad_mini_Wi-Fi_Pink_2-square_medium.jpg', type: 'Tablet', decript: 'ประสบการณ์ iPad แบบเต็มๆที่ออกแบบมาให้พอดีมือ', price: 1000 },
    { id: 4, name: 'iPhone 15 Pro', imageUrl:'https://media-cdn.bnn.in.th/332532/iPhone_15_Pro_Natural_Titanium_1-square_medium.jpg', type: 'Smartphone', decript: 'ที่สุดของ iPhone', price: 1200 },
    { id: 5, name: 'iPhone 15', imageUrl:'https://static-jaymart.com/ecom/public/2VN3bn6hWSsp1yBNltvegeeWS2Y.jpg', type: 'Smartphone', decript: 'ขุมพลังครบเครื่อง', price: 1200 },
    { id: 6, name: 'Macbook', imageUrl:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034', type: 'Laptop', decript: 'แล็ปท็อป Mac ที่ล้ำหน้าที่สุดสำหรับเวิร์กโฟลว์ที่ต้องประมวลผลหนักๆ', price: 1500 },
  
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
  

