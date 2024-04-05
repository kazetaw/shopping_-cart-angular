import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service'; // Import ไฟล์ service ที่ใช้ดึงข้อมูล

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
//   @Input() selectedProduct: any;
//   productDetails: any;

//   constructor(private productService: ProductService) {}

//   ngOnInit(): void {
//     if (this.selectedProduct && this.selectedProduct.id) {
//       this.productService.getProductById(this.selectedProduct.id)
//         .subscribe((data: any) => {
//           console.log('Product Details:', data);
//           this.productDetails = data;
//         });
//     } else {
//       console.warn('Selected Product is undefined or has no ID.');
//     }
//   }
//

productId: string = ''
productName: string = ''
product: any; // สร้างตัวแปรเพื่อเก็บข้อมูลผลิตภัณฑ์

constructor(
  private route: ActivatedRoute,
  private productService: ProductService
) { 
  this.route.params.subscribe(param => {
    // console.log("🚀 ~ ProductDetailsComponent ~ param:", param)
    this.productId = param['id']
    this.productName = param['name']
  })

}

  ngOnInit(): void {
  console.log("product parameter => ",this.productId,this.productName)
  // // ดึง ID ของผลิตภัณฑ์จาก URL
  // const productId: string = this.route.snapshot.paramMap.get('id') as string;
  // // เรียกใช้งาน service เพื่อดึงข้อมูลผลิตภัณฑ์ตาม ID
  // this.productService.getProductById(this.productId).subscribe((data: any) => {
  //   this.product = data; // กำหนดข้อมูลผลิตภัณฑ์ที่ได้ให้กับตัวแปร product
  // });

  this.product = this.productService.getProductById(+this.productId)
  console.log("🚀 ~ ProductDetailsComponent ~ ngOnInit ~ product:", this.product)
}
} 

