import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,HttpResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor (private route:Router) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("############# interceptor #############");
    console.log(req);
    return next.handle(req).do(
      next=>{
        console.log('############# interceptor ok ##########');
        if(event instanceof HttpResponse){
          console.log('############# get response ##########');
          console.log(event);
        }
    },err=>{
      console.log('####### interceptor error ##############');
      console.error(err);
      if(err.url=='http://shop.adibio.cn/admin/login'){
        this.route.navigate(['login']);
      }else if(err.url="http://shop.adibio.cn/manager/"){
        this.route.navigate(['board/order']);
      }
      
    });
  }
}