import { NgModule } from '@angular/core';

//模块
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatFormFieldModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material';
import {MatSortModule} from '@angular/material';
import {MatTabsModule} from '@angular/material'; 
import {MatInputModule} from '@angular/material';

//组件

import { TableComponent } from './table/table.component';
import { OrderComponent } from './order.component';

//路由
import { OrderRoutesModule } from './order.route';



@NgModule({
    imports:[
        FlexLayoutModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,

        OrderRoutesModule,

        
    ],
    providers:[
        
    ],
    declarations: [ 
        TableComponent,
        OrderComponent,
      ],
})
export class OrderModule{} 