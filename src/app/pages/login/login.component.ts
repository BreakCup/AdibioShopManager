import { Component, OnInit } from '@angular/core';
import {LoginServer} from './login.server';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginServer],
})
export class LoginComponent implements OnInit  {
  passWord:String;
  user:String;
  
  constructor(public loginServer:LoginServer ) { 
    
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
    this.loginServer.Login(this.user,this.passWord,event);

  }

  hide = true;

}
