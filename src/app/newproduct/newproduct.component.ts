import { ProductModel } from './../product-list/product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
title:string="add product";
  constructor( private productService:ProductService,private router:Router) { }
  productItem=new ProductModel(0,0," ");
  ngOnInit(): void {
  }
AddProduct(){
  this.productService.newProduct(this.productItem);
  console.log("called");
  alert("success")
  this.router.navigate(['/']);
}

}
