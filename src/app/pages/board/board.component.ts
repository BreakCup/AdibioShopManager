import { Component, OnInit } from '@angular/core';
import {  Router  } from '@angular/router';


@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor( private route:Router) { 
    //route.navigate(['board/order']);
  }

  ngOnInit() {
    
  }
  Logout(event){
    console.log("#### logout! #####");
    this.route.navigate(['/login']);
  }
}
