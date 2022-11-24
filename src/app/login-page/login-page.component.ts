import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


import { ValidationService } from '../validation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup | any
  signupform!: FormGroup

  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router, private cartService: CartService,public service:ValidationService,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    }),
      this.signupform = this.formBuilder.group({
        name: ['',Validators.required],
        email: ['',Validators.required],
        phone: ['',Validators.required],
        password: ['',Validators.required]

      })
      

  }

  //login method
  login() {
    

    this._http.get<any>("http://localhost:3000/signup").subscribe(res => {
      const user = res.find((a: any) => {

        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if (user) {
        
        alert("Login successfull");
        this.loginForm.reset();
        this.router.navigate(['/head'])
      } else {
        alert("User NOT found")
      }
    }, err => {
      alert("Welcome")
    })
  }
  signUp() {
    this._http.post<any>("http://localhost:3000/signup", this.signupform.value).subscribe(res => {
      alert("Registration successfull");
      this.signupform.reset();
      this.router.navigate(['/login'])
    }, err => {
      alert("Incorrcet ")
    })
  }
}