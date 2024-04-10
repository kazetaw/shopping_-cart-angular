// profile.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  // styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  editingMode: boolean = false; // เพิ่มตัวแปรเพื่อบอกถึงโหมดการแก้ไข

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  name: string = 'Alan L. Arsenault';
  username: string = '@Alansent';
  email: string = 'customer@gmail.com';
  address: string = '123 Main St, City, Country';
  phone: string = '********36';
  gender: string = 'male';
  birthday: string = '2002-03-26';

  // ฟังก์ชั่นเปลี่ยนโหมดการแก้ไข
  editProfile() {
    console.log('Edit profile form opened.');
    this.editingMode = true; // เปลี่ยนเป็นโหมดแก้ไขเมื่อกดปุ่ม
  }

  // ฟังก์ชั่นบันทึกการเปลี่ยนแปลง
  saveChanges() {
    console.log('Changes saved.');
    this.editingMode = false; // เปลี่ยนกลับเป็นโหมดปกติหลังจากบันทึก
  }}
