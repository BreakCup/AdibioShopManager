import { NgModule } from '@angular/core';

//模块
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material';

//组件
import { ProductComponent } from './product.component';

//路由
import { ProductRoutesModule } from './product.route';



@NgModule({
    imports:[
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        MatExpansionModule,

        ProductRoutesModule,

        
    ],
    providers:[
        
    ],
    declarations: [
        ProductComponent 

      ],
})
export class ProductModule{} 