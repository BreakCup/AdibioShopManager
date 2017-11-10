import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatCardModule} from '@angular/material';
import {LoginComponent} from './login.component';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material';
import {LoginRouterModule} from './login.route';

@NgModule({
    imports: [
        // BrowserModule,
        MatCardModule,
        FlexLayoutModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatSnackBarModule,
        CommonModule,
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