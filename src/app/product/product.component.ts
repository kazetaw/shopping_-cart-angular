import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { Product, ProductVariants } from '../models/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit{
  selectedType: string = 'All'; // กำหนดค่าเริ่มต้นให้ selectedType เป็น 'All' หรือหมวดหมู่ทั้งหมด

  // สมมติว่ามีฟังก์ชัน filterByType ในคลาสนี้
  filterByType(type: string): void {
    this.selectedType = type; // กำหนดค่า selectedType ใหม่เมื่อคลิกที่ปุ่มหมวดหมู่
    // ทำการเรียก API หรือการกรองข้อมูลตามประเภทที่เลือกไว้ และอัพเดตข้อมูลใหม่ใน products
  }
  filteredArray: any[] = []; // สร้างตัวแปรเพื่อเก็บสินค้าที่ถูกกรองตามประเภทที่เลือก
  selectedProduct: any; // Property to store the selected product for details view

  products: ProductVariants[] = []; // สร้างตัวแปร products แบบ Array
  colors: string[] = [];


constructor(private productService: ProductService, private router: Router) { 
}

  ngOnInit() :void{
    this.getProduct();
    this.filteredArray = this.products; // เริ่มต้นโชว์สินค้าทั้งหมด
    // this.getProductColors();
    

  }
  getProduct(){
    this.productService.getProducts().subscribe((products:ProductVariants[]) => {
      console.log("Log pro:",products)
      this.products = products;
    });
  }

  showAllProducts() {
    this.selectedType = ''; // รีเซ็ตประเภทที่เลือก
    this.filteredArray = this.products; // แสดงสินค้าทั้งหมด
  }
  showProductDetails(product: any) {
    this.selectedProduct = product; // Set the selected product for details view
  }

}