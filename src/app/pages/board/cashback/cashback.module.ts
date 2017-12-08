import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

//模块
import { TableModule } from  "./../../../public.module/table.module";
import { MatTabsModule } from '@angular/material';

//组件
import { CashbackComponent } from './cashback.component';
import {CashbackTableComponent} from "./cashback-table/cashback-table.component";

//路由
import { CashbackRoutesModule } from './cashback.route';

//服务
import {CashbackResolver} from "./../../../resolve.server/resolve.cashback"


@NgModule({
    imports:[
        CommonModule,
        TableModule,
        MatTabsModule,
        CashbackRoutesModule,

        
    ],
    providers:[
        CashbackResolver
        
    ],
    declarations: [ 
        CashbackComponent,
        CashbackTableComponent,
      ],
})
export class CashbackModule{} 