import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit{
  @ViewChild('dropdown')
  dropdown!: ElementRef;

  name: string = '';
  imageUrl: string = ''; // เพิ่ม imageUrl เพื่อใช้ในแต่ละ Product
  decript: string = '';
  type: string = '';
  price: any = null;
  indexUpdate: number = 0;
  selectedType: string = ''; // สร้างตัวแปรเพื่อเก็บประเภทที่เลือก
  filteredArray: any[] = []; // สร้างตัวแปรเพื่อเก็บสินค้าที่ถูกกรองตามประเภทที่เลือก
  selectedProduct: any; // Property to store the selected product for details view

  products: any[] = []; // สร้างตัวแปร products แบบ Array
product: any;


constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() :void{
    this.products = this.productService.products;

    this.filteredArray = this.products; // เริ่มต้นโชว์สินค้าทั้งหมด
  }
  filterByType(type: string) {
    this.selectedType = type; // เก็บประเภทที่ผู้ใช้เลือก
    if (type === '') {
      this.filteredArray = this.products; // ถ้าไม่ได้เลือกประเภทใดเลยให้แสดงสินค้าทั้งหมด
    } else {
      this.filteredArray = this.products.filter(product => product.type === type); // กรองสินค้าตามประเภทที่เลือก
    }
  }
  showAllProducts() {
    this.selectedType = ''; // รีเซ็ตประเภทที่เลือก
    this.filteredArray = this.products; // แสดงสินค้าทั้งหมด
  }
  showProductDetails(product: any) {
    this.selectedProduct = product; // Set the selected product for details view
  }
  navigateToProductDetail(productId: string, productName: string) {
    this.router.navigate(['/product-detail', productId, productName]);
  // toggleDropdown() {
  //   this.dropdown.nativeElement.classList.toggle('show');
  // }
  // getProductByID(id: number):any{
  //   const products = this.id();


  // }
}}