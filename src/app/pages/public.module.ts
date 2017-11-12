import { NgModule } from '@angular/core';


    //board login 共用模块
import {MatCardModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';

@NgModule({
    
    
     imports: [
       
     ],
    exports:[
        MatCardModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
     ],
   
    declarations: [ 
     ],
     providers:[
     ]
   })
   export class PublicModule { }
