import { NgModule } from '@angular/core';
import {  Routes,RouterModule  } from '@angular/router';
import {CashbackComponent} from "./cashback.component";

const OrderRoutes:Routes = [
    {
        path: '',
        component: CashbackComponent,
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
export class CashbackRoutesModule{}