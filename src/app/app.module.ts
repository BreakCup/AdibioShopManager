import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// 引入material和hammer
import 'hammerjs';

// 引入flex-layout
// import { FlexLayoutModule } from "@angular/flex-layout";

//模块
import {AppComponent} from "./app.component";
import { LoginModule } from "./pages/login/login.module";
import { BoardModule } from './pages/board/board.module';


//路由
import {AppRoutesModule} from './app.route';
import {HttpClientModule} from '@angular/common/http';
import { NotFountComponent} from "./not_found.component";

//服务
import {AuthGuard} from './pages/board/auth-guard.server';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import {HttpLogin} from './public.server/http.login.server';
import {HttpGetOrder} from './public.server/http.getOrder.server';
import {HttpGetOrderDetail} from './public.server/http.getOrderDetail';
import {HttpGerCashbackData} from './public.server/http.getCashbackData';

//组件
// import { TableComponent} from "./pages/board/table/table.component";

//配置文件
import { HttpConf } from './conf/http.conf';


@NgModule({
 
 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, //HTTP模块


    LoginModule,
    
    AppRoutesModule, //路由模块
    BoardModule,
    

  ],

    declarations: [ 
    AppComponent,
    NotFountComponent,
    // TableComponent

  ],
  providers:[
    AuthGuard,
    CookieService,
    HttpLogin,
    HttpConf,
    HttpGetOrder,
    HttpGetOrderDetail,
    HttpGerCashbackData
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }