import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// 引入material和hammer
//模块
import 'hammerjs';

// 引入flex-layout
// import { FlexLayoutModule } from "@angular/flex-layout";

//模块
import {AppComponent} from "./app.component";
import {HTTP_INTERCEPTORS} from '@angular/common/http';


//路由
import {AppRoutesModule} from './app.route';
import {HttpClientModule} from '@angular/common/http';
import { NotFountComponent} from "./not_found.component";

//服务
import {Interceptor} from './public.server/http.inteceptor';
import {OrderDetailResolver} from './resolve.server/resolve.order_detail';
// import { CookieService } from 'angular2-cookie/services/cookies.service';
import {AuthGuard} from './public.server/auth-guard.server';
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


    AppRoutesModule, //路由模块

    

  ],

    declarations: [ 
    AppComponent,
    NotFountComponent,
    // TableComponent

  ],
  providers:[
    
    // CookieService,
    AuthGuard,
    HttpLogin,
    HttpConf,
    HttpGetOrder,
    HttpGetOrderDetail,
    HttpGerCashbackData,
    OrderDetailResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }