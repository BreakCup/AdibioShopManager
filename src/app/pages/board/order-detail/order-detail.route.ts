import { NgModule } from '@angular/core';
import {  Routes,RouterModule  } from '@angular/router';
import {OrderDetailComponent} from "./order-detail.component";
import { OrderDetailResolver } from './../../../resolve.server/resolve.order_detail'

const OrderRoutes:Routes = [
    {
        path: '',
        component: OrderDetailComponent,
        resolve:{order_detail:OrderDetailResolver}
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