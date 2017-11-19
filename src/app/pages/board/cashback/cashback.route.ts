import { NgModule } from '@angular/core';
import {  Routes,RouterModule  } from '@angular/router';
import {CashbackComponent} from "./cashback.component";

import {CashbackResolver} from "./../../../resolve.server/resolve.cashback"

const CashbackRoutes:Routes = [
    {
        path: '',
        component: CashbackComponent,
        resolve:{cashbackData:CashbackResolver}
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