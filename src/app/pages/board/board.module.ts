import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";

import {MatSidenavModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {BoardRoutesModule} from './board.route';
import {MatMenuModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material';
import {MatRadioModule} from '@angular/material';
import {EssenceNg2PrintModule} from "essence-ng2-print";

import {MatTabsModule} from '@angular/material';   
 //table 所需
import {MatTableModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material';
import {MatSortModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';

//组件
import {BoardComponent} from "./board.component";
import { ProductComponent } from './product/product.component';
import { MemberComponent } from './member/member.component';
import { DataComponent } from './data/data.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { PrintCodeComponent } from './print-code/print-code.component' ;
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { TableComponent } from './table/table.component';
import { OrderComponent } from './order/order.component';

//服务



@NgModule({
    imports:[
       
        FlexLayoutModule,
        MatSidenavModule,
        MatCardModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        BoardRoutesModule,
        MatMenuModule,

        //table
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,

        MatTabsModule,

        MatGridListModule,
        MatExpansionModule,
        MatRadioModule,
        EssenceNg2PrintModule,
        
        
    ],
    providers:[
        
    ],
    declarations: [ 
        BoardComponent,
        MemberComponent,
        DataComponent,

        ProductComponent,
        
        OrderDetailComponent,
        PrintCodeComponent,
        ProductDetailComponent,
        TableComponent,
        OrderComponent

      ],
})
export class BoardModule{} 