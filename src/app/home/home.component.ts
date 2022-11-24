import { Component, OnInit } from '@angular/core';


import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router'; 

import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog :MatDialog, 

    private routea:ActivatedRoute, 

    private route:Router,) { }

  ngOnInit(): void {
  }
  opendialog1(){ 

   // const configdia=new MatDialogConfig(); 

   // configdia.width='80%'; 

   // configdia.autoFocus=true; 

   // configdia.disableClose=true; 

   // this.dialog.open(LoginPageComponent,configdia) 

   this.route.navigate(['login'])

  }
}
