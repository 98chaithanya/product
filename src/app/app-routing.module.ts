import { NewproductComponent } from './newproduct/newproduct.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
//import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [{path:'product',component:ProductListComponent},
 {path:'add',component:NewproductComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
