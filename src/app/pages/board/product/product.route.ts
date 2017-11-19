import { NgModule } from '@angular/core';
import {  Routes,RouterModule  } from '@angular/router';
import {ProductComponent} from "./product.component";

const ProductRoutes:Routes = [
    {
        path: '',
        component: ProductComponent,
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(ProductRoutes)
    ],
    exports: [
        RouterModule
      ]
})
export class ProductRoutesModule{}