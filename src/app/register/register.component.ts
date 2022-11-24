import { Component, OnInit } from '@angular/core'; 

import { NotificationService } from '../notification.service'; 
import { ValidationService } from '../validation.service'; 

import { FormBuilder,FormGroup } from '@angular/forms';

@Component({ 

  selector: 'app-register', 

  templateUrl: './register.component.html', 

  styleUrls: ['./register.component.css'] 

}) 

export class RegisterComponent implements OnInit { 
  signupForm!:FormBuilder
  constructor(public service:ValidationService, 
    public notificationService:NotificationService,private FormBuilder:FormBuilder ) { } 

  ngOnInit(): void { 
    

  } 

  ClearValue() 

  { 

    this.service.formValidate.reset(); 

    this.service.initializeForms(); 

  } 

  submitData(){ 

    this.notificationService.successfullyCreated("Registeration Done Successfully"); 

  } 
  

} 