import { NgModule } from '@angular/core';


import {LoginComponent} from './login.component';

import {MatSnackBarModule} from '@angular/material';

import {PublicModule} from './../public.module'

import {LoginRouterModule} from './login.route';



@NgModule({
    imports: [
        // BrowserModule,

        MatSnackBarModule,
        LoginRouterModule,

        PublicModule

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