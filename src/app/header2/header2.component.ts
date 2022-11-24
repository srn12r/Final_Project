import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service'; 


@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {
  public totalItem : number = 0;
  public searchTerm !: string; 
  constructor(private cartService : CartService,private router:Router){}
  ngOnInit(): void {
    
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
by(){
  this.router.navigateByUrl('/'+'cart')
}

b(){
  this.router.navigateByUrl('/'+'profile')
}   

  

}
