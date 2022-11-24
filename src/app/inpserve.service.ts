import { Injectable } from '@angular/core'; 

import { Inputclass } from './inputclass'; 

@Injectable({ 

  providedIn: 'root' 

}) 

export class InpserveService { 

  constructor() { } 

  getstudentdetail():Inputclass[]{ 

    return[{ 

     Brand:"Raymonds", 

     Price:2500, 

     ImageUrl:"assets/Raymonds.jpg" 

   }]

  } 

} 