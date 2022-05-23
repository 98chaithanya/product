import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from './product-list/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
constructor(private http:HttpClient){ }
getProducts(){
  return this.http.get("https://jsonplaceholder.typicode.com/albums");
}
newProduct(item: ProductModel)
{
  return this.http.post("https://jsonplaceholder.typicode.com/albums",{"product":item})
  .subscribe(data=>{console.log(data)})
}
}
