import { Injectable } from '@angular/core';

import {  Router  } from '@angular/router';
import {MatSnackBar} from '@angular/material';

//server
import { CookieService } from 'angular2-cookie/services/cookies.service';


@Injectable()
export class LogoutServer{
   
    constructor(private route:Router,public snackBar: MatSnackBar,private cookies:CookieService){
        
    }
    public Logout(){
        this.cookies.remove('usr');
        this.cookies.remove('pas');
        this.cookies.remove('isL');
        this.snackBar.open("成功登出",'确定',{duration: 1000,});
        //this.route.navigate(['/login']);
        
    }
}