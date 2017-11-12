import { NgModule } from '@angular/core';
import {  Routes,RouterModule  } from '@angular/router';
import {BoardComponent} from "./board.component";
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { MemberComponent } from './member/member.component';
import { DataComponent } from './data/data.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { PrintCodeComponent } from './print-code/print-code.component';
import { CashbackComponent } from './cashback/cashback.component';
import {AuthGuard} from './../../public.server/auth-guard.server';

const BoardRoutes:Routes = [
    {
        path: '',
        component: BoardComponent,
        // canActivate:[AuthGuard],
        children: [
          {
            path: '',
            // canActivateChild:[],
            children: [
              {
                path: 'order',
                loadChildren:'./order/order.module#OrderModule'
              },{
                path: 'product',
                component:ProductComponent
              },{
                path: 'member',
                component:MemberComponent
              },{
                path: 'data',
                component:DataComponent
              },{
                path: 'detail/:id',
                loadChildren:'./order-detail/order-detail.module#OrderDetailModule'
              },{
                path: 'print/:id',
                loadChildren:'./print-code/print-code.module#PrintCodeModule'
              },{
                path: 'cashback',
                loadChildren:'./cashback/cashback.module#CashbackModule'
              }
              
            ]
          }
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(BoardRoutes)
    ],
    exports: [
        RouterModule
      ]
})
export class BoardRoutesModule{}