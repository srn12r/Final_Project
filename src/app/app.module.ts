import { HttpClientModule } from '@angular/common/http'; 
import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { MaterialDesignModule } from './material-design/material-design.module'; 
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component'; 
import { LoginComponent } from './login/login.component'; 
import { RegisterComponent } from './register/register.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { FormsModule} from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input';
import { CartComponent } from './cart/cart.component';

import { ProductsComponent } from './products/products.component';
import { FilterPipe } from './filter.pipe';
import {MatTabsModule} from '@angular/material/tabs';
import { HomeComponent } from './home/home.component';
import { Header2Component } from './header2/header2.component';

import { CarouselFoodDogComponent } from './carousel-food-dog/carousel-food-dog.component'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SignupComponent } from './signup/signup.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfileComponent } from './profile/profile.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DataComponent } from './data/data.component';
import { YComponent } from './y/y.component';

@NgModule({ 

  declarations: [ 

    AppComponent, 

    LoginComponent,

    RegisterComponent,
     

    
    CartComponent,  
    ProductsComponent, FilterPipe,  HomeComponent, Header2Component,  CarouselFoodDogComponent, SignupComponent, LoginPageComponent, ProfileComponent, CheckoutComponent, DataComponent, YComponent 

  ], 

  imports: [ 

    BrowserModule, 
    MatTabsModule,

    AppRoutingModule, 

    BrowserAnimationsModule, 

    MaterialDesignModule, 

    FormsModule, 

    MatFormFieldModule, 

    MatDialogModule, 

    ReactiveFormsModule, 

    HttpClientModule, 

    MatToolbarModule, 

    MatIconModule, 

    MatButtonModule, 

    MatInputModule, 

    MatGridListModule, 

    MatTableModule, 

    MatCheckboxModule

  ], 

  providers: [], 

  bootstrap: [AppComponent] 

}) 

export class AppModule { } 