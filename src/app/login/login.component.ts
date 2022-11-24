import { Component, OnInit } from '@angular/core'; 

import { MatDialog, MatDialogConfig } from '@angular/material/dialog'; 

import { NotificationService } from '../notification.service'; 

import { RegisterComponent } from '../register/register.component'; 

import { ValidationService } from '../validation.service'; 

import { ActivatedRoute, Router } from '@angular/router'; 

import { InpserveService } from '../inpserve.service'; 
import { Header2Component } from '../header2/header2.component';

@Component({ 

  selector: 'app-login', 

  templateUrl: './login.component.html', 

  styleUrls: ['./login.component.css'] 

}) 

export class LoginComponent implements OnInit { 

  constructor(public service:ValidationService, 

    public notificationService:NotificationService, 

    public dialog :MatDialog, 

    private routea:ActivatedRoute, 

    private route:Router, 

    private inpvar:InpserveService) { } 

  ngOnInit(): void { 

  } 

  opendialog1(){ 

    const configdia=new MatDialogConfig(); 

    configdia.width='80%'; 

    configdia.autoFocus=true; 

    configdia.disableClose=true; 

    this.dialog.open(RegisterComponent,configdia) 

  } 

 
    // const configdia=new MatDialogConfig(); 

    // configdia.width='500%'; 
    // configdia.height='500%';

    // configdia.autoFocus=false; 

    // configdia.disableClose=false; 
    header(){
    this.route.navigateByUrl('/head'); 
    console.log("hi")  
  }

  ClearValue1() 

  { 

    this.service.formValidate1.reset(); 

    this.service.initializeForms1(); 

  } 

  submitData1(){ 

    this.notificationService.successfullyCreated("Login Successfull"); 

  } 

} 