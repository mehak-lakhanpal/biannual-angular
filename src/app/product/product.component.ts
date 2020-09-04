import { Component, OnInit } from '@angular/core';
import {ProductService} from '../core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:any=[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.productService.getProducts().subscribe(data=>{
      console.log(data);
      this.products= data;
    })
  }

}
