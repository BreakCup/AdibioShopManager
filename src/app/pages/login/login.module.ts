import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatCardModule} from '@angular/material';
import {LoginComponent} from './login.component';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material';


@NgModule({
    imports: [
        BrowserModule,
        MatCardModule,
        FlexLayoutModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatSnackBarModule

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