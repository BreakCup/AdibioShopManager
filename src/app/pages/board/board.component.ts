import { Component, OnInit } from '@angular/core';
import {  Router  } from '@angular/router';
import { LogoutServer } from './../../public.server/logout.server';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(private logout:LogoutServer, private route:Router) { 
    //route.navigate(['board/order']);
  }

  ngOnInit() {
    
  }
  Logout(event){
    console.log("#### logout! #####");
    this.route.navigate(['/login']);
  }
}
