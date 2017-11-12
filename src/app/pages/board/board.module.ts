import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from "@angular/flex-layout";
import {MatCardModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';

import {MatTabsModule} from '@angular/material';   


//import {PublicModule} from './../public.module'

//组件
import {BoardComponent} from "./board.component";
import { ProductComponent } from './product/product.component';
import { MemberComponent } from './member/member.component';
import { DataComponent } from './data/data.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


//服务

//路由
import {BoardRoutesModule} from './board.route';

@NgModule({
    imports:[
        FlexLayoutModule,
        MatCardModule,
        BoardRoutesModule,
        MatMenuModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,

        MatTabsModule,
        
    ],
    providers:[
        
    ],
    declarations: [ 
        BoardComponent,
        MemberComponent,
        DataComponent,
        ProductComponent,
        
        ProductDetailComponent,

      ],
})
export class BoardModule{} 