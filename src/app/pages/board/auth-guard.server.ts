import { Injectable }     from '@angular/core';
import { CanActivate,Router,CanLoad,Route}    from '@angular/router';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import {HttpLogin} from './../../public.server/http.login.server';

@Injectable()
export class AuthGuard implements CanActivate,CanLoad{
  constructor(private route:Router,private cookie:CookieService,private httpLogin:HttpLogin){

  }
  canActivate() {
    console.log('********AuthGuard:canActivate called**********');
    if(this.IsLogined()){
      return true;
    }
    this.route.navigate(["/login"]);
    return false;
  }
  canLoad(route: Route):boolean{
    console.log('********AuthGuard:canLoad called**************');
    if(this.IsLogined()){
      return true;
    }
    this.route.navigate(["/login"]);
    return false;
  }

  IsLogined():boolean{
    if(this.cookie.get('isL')=='shi'){
      if(this.httpLogin.HttpLogin(this.cookie.get('usr'),this.cookie.get('pas'))){
        return true;
      }
    }
    return true;
  }
  
}