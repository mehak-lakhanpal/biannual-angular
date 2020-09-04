import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiUrl='http://localhost:8080/api/cart';
  constructor(private http:HttpClient) { }

  getCart():Observable<any>{
    console.log(this.http.get<any>(this.apiUrl));
    return this.http.get<any>(this.apiUrl)
  }

  deleteProductById(id:Number):Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  addProductToCart(product:any):Observable<any>{
    return this.http.post<any>(this.apiUrl,product);
  }
}
