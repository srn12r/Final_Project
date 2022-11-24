import { NgModule } from '@angular/core'; 

import { RouterModule, Routes } from '@angular/router'; 
import { RegisterComponent } from './register/register.component'; 

import { LoginComponent } from './login/login.component'; 

import { CartComponent } from './cart/cart.component';
 
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';

import { Header2Component } from './header2/header2.component';

import { SignupComponent } from './signup/signup.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { YComponent } from './y/y.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [ 
  

  {path:'product',component:ProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginPageComponent},
   {path:'order',component:YComponent},
  {path:'reg',component:RegisterComponent}, 
  {path:'payment',component:CheckoutComponent},
  {path:'log',component:LoginComponent}, 
  {path:'head',component:Header2Component},
  {path:'profile',component:ProfileComponent}


   

]; 



@NgModule({ 

  imports: [RouterModule.forRoot(routes)], 

  exports: [RouterModule] 

}) 

export class AppRoutingModule { }