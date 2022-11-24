import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

import { LoginPageComponent } from '../login-page/login-page.component';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  





  /*
  constructor() { }

  ngOnInit(): void {
  }

}
*/

  requestData: any = [];
  public products: any = [];
  public grandTotal !: number;
  public datasource:any=[];
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router, private cartService: CartService, public loginPage: LoginPageComponent) { }


  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
    this._http.get('http://localhost:3000/profile')
  .subscribe(result => {
    console.log(result);
  });
  }
  datasourc(){
    return this.requestData ._http.get('http://localhost:300/profile').subscribe()
  }

  log() {
    return this.requestData = this.loginPage.login();
  }
  
  
}


