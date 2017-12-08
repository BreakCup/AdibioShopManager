import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cashback',
  // template: '1',
  templateUrl: './cashback.component.html',
  styleUrls: ['./cashback.component.css']
})

export class CashbackComponent implements OnInit {

  public status = [
      {label:'未返现',path:'/board/cashback/status',status:'unpaid'},
      {label:'已返现',path:'/board/cashback/status',status:'paid'},
  ];

  constructor(private route:Router){
    route.navigate(['/board/cashback/status','unpaid']);
  }

  ngOnInit(){

  }
 
  
}

