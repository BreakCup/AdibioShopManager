import { Injectable } from '@angular/core';

import {  Router  } from '@angular/router';
import {MatSnackBar} from '@angular/material';

//server
// import { CookieService } from 'angular2-cookie/services/cookies.service';
import {HttpLogin} from './../../public.server/http.login.server';

@Injectable()
export class LoginServer{
   
    constructor(private httpLogin:HttpLogin,private route:Router,public snackBar: MatSnackBar){
        
    }
    private passWord:String;
    private user:String;
    Input(){

    }
    public Login(user:String,passWord:String,event:any){
        if(user==undefined || user==''){
            this.snackBar.open("请输入用户名！",'确定',{duration: 1000,});
        }else if(passWord==undefined ||passWord==""){
            this.snackBar.open("请输入密码！",'确定',{duration: 1000,});
        }else{
            this.httpLogin.HttpLogin(user.toString(),passWord.toString()).then(
                (result)=>{
                    if(result.result=='ok'){
                        console.log('成功登录');
                        this.route.navigate(['/board/order']);
                    }else{
                        this.snackBar.open("用户名或者密码错误！",'确定',{duration: 1000,});
                    }
                },
                (error)=>{
                    console.log(error);
                    this.snackBar.open("请求错误！",'确定',{duration: 1000,});
                }
            );

            
        }
        
    }
}