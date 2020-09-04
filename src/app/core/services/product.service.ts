import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


apiUrl='http://localhost:8080/api/products';
  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    console.log(this.http.get<any>(this.apiUrl));
    return this.http.get<any>(this.apiUrl)
  }

  getProductById(id:Number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
