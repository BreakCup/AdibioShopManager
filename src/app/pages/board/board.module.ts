import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from "@angular/flex-layout";
import {MatCardModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';   

//组件
import {BoardComponent} from "./board.component";

import { DataComponent } from './data/data.component';



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
        DataComponent,
        

      ],
})
export class BoardModule{} 