import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:'',
 //component:AppComponent,
 redirectTo:'home',
 pathMatch:'full'
 },
 {
   path:'home',
   component:HomeComponent,
   children:[]
 } ,
 {
   path: 'profile',
   component:ProfileComponent
 },
 {
   path: 'login',
   component:LoginComponent
 },
 {
   path: 'catalog',
   component:CatalogComponent
 },
 { path: '', redirectTo: '/products', pathMatch: 'full' }, // เส้นทางหลัก

 {
   path: 'product-detail/:id/:name',
   component:ProductDetailsComponent  
 },
 
 {
   path: 'register',
   component:RegisterComponent
 },

 { path:'**', redirectTo:'page-one',pathMatch:'full'},
];
 

// queryparams,params
 @NgModule({
  
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }
 