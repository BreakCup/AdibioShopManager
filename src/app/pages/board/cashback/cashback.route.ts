import { NgModule } from '@angular/core';
import {  Routes,RouterModule  } from '@angular/router';
import {CashbackComponent} from "./cashback.component";
import {CashbackTableComponent} from "./cashback-table/cashback-table.component";

import {CashbackResolver} from "./../../../resolve.server/resolve.cashback"

const CashbackRoutes:Routes = [
    {
        path: '',
        component: CashbackComponent,
        children:[{
            path:'',
            children:[{
                path: 'status/:status',
                component: CashbackTableComponent,
                resolve:{cashbackData:CashbackResolver}
            }]

        }]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(CashbackRoutes)
    ],
    exports: [
        RouterModule
      ]
})
export class CashbackRoutesModule{}