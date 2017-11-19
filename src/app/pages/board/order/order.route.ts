import { NgModule } from '@angular/core';
import {  Routes,RouterModule  } from '@angular/router';
import {OrderComponent} from "./order.component";
import {TableComponent} from "./table/table.component";

import { OrderResolve } from './../../../resolve.server/resolve.order'

const OrderRoutes:Routes = [
    {
        path: '',
        component: OrderComponent,
        children:[{
            path:'',
            children:[{
                path: 'status/:status',
                component: TableComponent,
                resolve:{orderData:OrderResolve}
            }]

        }]
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