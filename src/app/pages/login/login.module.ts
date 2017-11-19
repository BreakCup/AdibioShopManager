import { NgModule } from '@angular/core';


import {LoginComponent} from './login.component';
import {MatSnackBarModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';


import {LoginRouterModule} from './login.route';



@NgModule({
    imports: [
        MatSnackBarModule,
        MatCardModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        LoginRouterModule,

    ],
    exports:[
        LoginComponent
    ],
    providers:[
        
    ],
    declarations: [ 
        LoginComponent
    ]
})
export class LoginModule {}