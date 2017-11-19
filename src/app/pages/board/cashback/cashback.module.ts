import { NgModule } from '@angular/core';

//模块
import { CommonModule } from '@angular/common';
import { TableModule } from  "./../../../public.module/table.module";

//组件
import { CashbackComponent } from './cashback.component';

//路由
import { CashbackRoutesModule } from './cashback.route';

//服务
import {CashbackResolver} from "./../../../resolve.server/resolve.cashback"


@NgModule({
    imports:[
        CommonModule,
        TableModule,
        CashbackRoutesModule,

        
    ],
    providers:[
        CashbackResolver
        
    ],
    declarations: [ 
        CashbackComponent,
      ],
})
export class CashbackModule{} 