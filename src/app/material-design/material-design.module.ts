import { NgModule } from '@angular/core'; 

import { CommonModule } from '@angular/common'; 

import {MatToolbarModule} from '@angular/material/toolbar'; 

import {MatIconModule} from '@angular/material/icon'; 

import {MatGridListModule} from '@angular/material/grid-list'; 

import {MatFormFieldModule} from '@angular/material/form-field'; 

import {MatTableModule} from '@angular/material/table'; 

 

import {MatSnackBarModule} from '@angular/material/snack-bar'; 

import {MatDialogModule} from '@angular/material/dialog'; 

 
import {MatCheckboxModule} from '@angular/material/checkbox';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({ 

  declarations: [], 

  imports: [ 

    CommonModule, 

    MatToolbarModule, 

    MatIconModule, 

    MatGridListModule, 

    MatFormFieldModule, 

    MatSnackBarModule, 

    MatButtonModule, 

    MatTableModule, 

    MatDialogModule, 

    ReactiveFormsModule,

    MatCheckboxModule,

    BrowserModule,
    FormsModule,
    
    BrowserAnimationsModule,
    
    MatInputModule,
    

  ], 

  exports:[ 

    MatToolbarModule, 

    MatIconModule, 

    MatGridListModule, 

    MatFormFieldModule, 

    MatSnackBarModule, 

    MatButtonModule, 

    MatTableModule, 

    MatDialogModule, 

    ReactiveFormsModule ,

    BrowserModule,
    FormsModule,
    
    BrowserAnimationsModule,
    
    MatInputModule,
    

  ] 

}) 

export class MaterialDesignModule { } 
