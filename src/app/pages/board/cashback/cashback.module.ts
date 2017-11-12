import { NgModule } from '@angular/core';

//模块
import {MatFormFieldModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material';
import {MatSortModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';

//组件
import { CashbackComponent } from './cashback.component';

//路由
import { CashbackRoutesModule } from './cashback.route';



@NgModule({
    imports:[
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,

        CashbackRoutesModule,

        
    ],
    providers:[
        
    ],
    declarations: [ 
        CashbackComponent,
      ],
})
export class CashbackModule{} 