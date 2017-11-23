import { NgModule } from '@angular/core';

//模块
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatRadioModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material';


//组件
import { OrderDetailComponent } from './order-detail.component';

//路由
import { OrderDetailRoutesModule } from './order-detail.route';



@NgModule({
    imports:[
        CommonModule,
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        MatListModule,
        MatGridListModule,
        MatIconModule,
        MatButtonModule,
        MatRadioModule,
        MatExpansionModule,

        OrderDetailRoutesModule,

        
    ],
    providers:[
        
    ],
    declarations: [
        OrderDetailComponent 

      ],
})
export class OrderDetailModule{} 