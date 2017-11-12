import { NgModule } from '@angular/core';
import {  Routes,RouterModule  } from '@angular/router';
import {OrderDetailComponent} from "./order-detail.component";

const OrderRoutes:Routes = [
    {
        path: '',
        component: OrderDetailComponent,
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
export class OrderDetailRoutesModule{}