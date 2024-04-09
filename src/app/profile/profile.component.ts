import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  address: string = '789 Apple Boulevard, Silicon Valley, NY 67890, USA';
  editAddress() {
    // ตัวอย่างโค้ดสำหรับแก้ไขที่อยู่ ให้ปรับปรุงตามการทำงานจริง
    this.address = 'This is Fake New Address when you edit address';
  }
  
}
