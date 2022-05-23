import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { RouteReuseStrategy } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule}from '@angular/common/http';
import "@angular/compiler";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewproductComponent,
    ProductListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
