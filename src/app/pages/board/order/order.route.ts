import { NgModule } from '@angular/core';
import {  Routes,RouterModule  } from '@angular/router';
import {OrderComponent} from "./order.component";

const OrderRoutes:Routes = [
    {
        path: '',
        component: OrderComponent,
        pathMatch:'full'
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(OrderRoutes)
    ],
    exports: [
        RouterModule
      ]
})
export class OrderRoutesModule{}