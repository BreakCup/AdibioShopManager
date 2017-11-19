import { NgModule } from '@angular/core';

//模块
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTabsModule } from '@angular/material';
import { TableModule } from  "./../../../public.module/table.module";



//组件

import { TableComponent } from './table/table.component';
import { OrderComponent } from './order.component';

//路由
import { OrderRoutesModule } from './order.route';

//服务
import { OrderResolve } from './../../../resolve.server/resolve.order'

@NgModule({
    imports:[
        CommonModule,
        FlexLayoutModule,
        MatTabsModule,
        TableModule,
        OrderRoutesModule,

        
    ],
    providers:[
        OrderResolve
    ],
    declarations: [ 
        TableComponent,
        OrderComponent,
      ],
})
export class OrderModule{} 