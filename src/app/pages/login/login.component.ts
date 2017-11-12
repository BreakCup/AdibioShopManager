import { Component, OnInit } from '@angular/core';


import {MatSnackBar} from '@angular/material';

import {HttpLogin} from './../../public.server/http.login.server';
import {  Router  } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit  {
  passWord:String;
  user:String;
  
  constructor(private httpLogin:HttpLogin,public snackBar: MatSnackBar, private route:Router,) { 
    
  }

  ngOnInit() {
    
  }
  
  //输入用户名和密码
  Input(event:any){
  
    if(event.target.placeholder=='账号'){
      this.user = event.target.value;
    }else if(event.target.placeholder=='密码'){
      this.passWord = event.target.value;
    }
  }
  KeyUp(event){
    if(event.key=='Enter'){
      this.Login(event);
    }
  }

  Login(event){
    if(this.user==undefined || this.user==''){
      this.snackBar.open("请输入用户名！",'确定',{duration: 1000,});
    }else if(this.passWord==undefined ||this.passWord==""){
        this.snackBar.open("请输入密码！",'确定',{duration: 1000,});
    }else{
      this.httpLogin.HttpLogin(this.user.toString(),this.passWord.toString()).then(
        (result)=>{
          if(result.result=='ok'){
              console.log('成功登录');
              this.route.navigate(['board/order']);
          }else{
              this.snackBar.open("用户名或者密码错误！",'确定',{duration: 1000,});
          }
        },
        (error)=>{
            console.log(error);
            this.snackBar.open("登录失败！",'确定',{duration: 1000,});
        }
    );
    }
    
    
  }

  hide = true;

}
