import { Component, OnInit } from '@angular/core';
import {CartService} from '../core/services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:any=[];
  total:Number=0;

  constructor(private cartService:CartService, private router:Router) { }

  ngOnInit(): void {
    this.getCartProducts();
  }
  getCartProducts(){
    this.cartService.getCart().subscribe(data=>{
      console.log(data);
      this.products= data;
      this.total=0;
     for(let p of this.products){
        this.total = this.total+p.price; 
     }
    })
  }

  deleteFromCart(id:Number){
    this.cartService.deleteProductById(id).subscribe(data=>{
      this.getCartProducts();
    })
  }

  back(){
    this.router.navigate(['products'])
  }

}
