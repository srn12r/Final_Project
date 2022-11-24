import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder, private _http: HttpClient) { }

  ngOnInit(): void {
  }

}
/*

  requestData: any = [];
  public products: any = [];
  public grandTotal !: number;
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router, private cartService: CartService, public loginPage: LoginPageComponent) { }


  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  log() {
    return this.requestData = this.loginPage.login();
  }
}
*/
