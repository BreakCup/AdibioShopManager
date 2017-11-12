import { NgModule } from '@angular/core';

//模块
import {EssenceNg2PrintModule} from "essence-ng2-print";

//组件
import { PrintCodeComponent } from './print-code.component';

//路由
import { PrintCodeRoutesModule } from './print-code.route';



@NgModule({
    imports:[
        EssenceNg2PrintModule,

        PrintCodeRoutesModule,
    ],
    providers:[
        
    ],
    declarations: [ 
        PrintCodeComponent,
      ],
})
export class PrintCodeModule{} 