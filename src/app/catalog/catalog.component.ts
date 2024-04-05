import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  name: string = '';
  imageUrl: string = ''; // เพิ่ม imageUrl เพื่อใช้ในแต่ละ Product
  decript: string = '';
  type: string = '';
  price: any = null;
  indexUpdate: number = 0;

  array = [
    { name: 'Product 1', imageUrl:'https://media-cdn.bnn.in.th/228680/Asus-Notebook-Vivobook-15-X1502ZA-01-square_medium.jpg',type: 'Type 1', decript: 'Description 1', price: 100 },
    { name: 'Product 1', imageUrl:'https://media-cdn.bnn.in.th/228680/Asus-Notebook-Vivobook-15-X1502ZA-01-square_medium.jpg',type: 'Type 1', decript: 'Description 1', price: 100 },
    { name: 'Product 1', imageUrl:'https://media-cdn.bnn.in.th/228680/Asus-Notebook-Vivobook-15-X1502ZA-01-square_medium.jpg',type: 'Type 1', decript: 'Description 1', price: 100 },
    { name: 'Product 1', imageUrl:'https://media-cdn.bnn.in.th/228680/Asus-Notebook-Vivobook-15-X1502ZA-01-square_medium.jpg',type: 'Type 1', decript: 'Description 1', price: 100 },
    { name: 'Product 1', imageUrl:'https://media-cdn.bnn.in.th/228680/Asus-Notebook-Vivobook-15-X1502ZA-01-square_medium.jpg',type: 'Type 1', decript: 'Description 1', price: 100 },
    { name: 'Product 1', imageUrl:'https://media-cdn.bnn.in.th/228680/Asus-Notebook-Vivobook-15-X1502ZA-01-square_medium.jpg',type: 'Type 1', decript: 'Description 1', price: 100 }
  
  ];
selectedProduct: any;

  constructor() {}

  ngOnInit(): void {}

  createRow() {
    this.array.push({ name: this.name, imageUrl: this.imageUrl,type: this.type, decript: this.decript, price: this.price });
    this.resetForm();
  }

  updateRow() {
    this.array[this.indexUpdate].name = this.name;
    this.array[this.indexUpdate].imageUrl = this.imageUrl;
    this.array[this.indexUpdate].type = this.type;
    this.array[this.indexUpdate].decript = this.decript;
    this.array[this.indexUpdate].price = this.price;
    this.resetForm();
  }

  setUpdateRow(item: any, index: number) {
    this.name = item.name;
    this.imageUrl = item.imageUrl;
    this.type = item.type;
    this.decript = item.decript;
    this.price = item.price;
    this.indexUpdate = index;
  }

  deleteRow(index: number) {
    this.array.splice(index, 1);
  }

  resetForm() {
    this.name = '';
    this.imageUrl = '';
    this.type = '';
    this.decript = '';
    this.price = null;
    this.indexUpdate = 0;
  }
  sortByPrice() {
    this.array.sort((a, b) => a.price - b.price);
  }

  sortByName() {
    this.array.sort((a, b) => a.name.localeCompare(b.name));
  }
}
