import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../core/services/cart.service';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.css']
})
export class ProductDescComponent implements OnInit {

  product:any;
  id:Number;
  cart:any=[];
    constructor(private productService:ProductService, private activatedRoute:ActivatedRoute,private cartService:CartService,
      private router:Router) { }
  
    ngOnInit(): void {
      this.getProductById();
    }
  
    getProductById(){
      this.id=this.activatedRoute.snapshot.params['id'];
      console.log(this.id)
      this.productService.getProductById(this.id).subscribe(data=>{
        this.product= data;
        console.log(data)
      })
    }

    addToCart(product:any){
      console.log(product)
     this.cartService.addProductToCart(product).subscribe(data=>{
       console.log("in cart")
       this.router.navigate(['/cart']);
     })
    }

}
