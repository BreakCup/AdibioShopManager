import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// 引入material和hammer
import { MatButtonModule } from '@angular/material';
import 'hammerjs';

// 引入flex-layout
import { FlexLayoutModule } from "@angular/flex-layout";

import {AppComponent} from "./app.component";
import { LoginModule } from "./pages/login/login.module";

import {  RouterModule } from '@angular/router';

import {appRoutes} from './app.route';


@NgModule({
  // declaratiLoginComponentons: [

  // ],
 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule, // 为子组件引入FlexLayout
    MatButtonModule,
    LoginModule,
    RouterModule.forRoot(appRoutes)

  ],
  declarations: [ 
    AppComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
