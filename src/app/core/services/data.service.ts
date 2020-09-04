import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  createDb(){
    const products:any[]=[{
      id:1,
      name:"Product1",
      price:2000,
      desc:"Description",
      tags:'tag1',
      category:'category1',
      quantity:100,
      returnable:'yes'
    },
    {
      id:2,
      name:"Product2",
      price:2000,
      desc:"Description",
      tags:'tag1',
      category:'category2',
      quantity:100,
      returnable:'yes'
    },
    {
      id:3,
      name:"Product3",
      price:2000,
      desc:"Description",
      tags:'tag1',
      category:'category2',
      quantity:100,
      returnable:'no'
    }];
    const cart:any[]=[];
    return {products,cart};
  }

  constructor() { }
}
