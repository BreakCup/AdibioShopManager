import { Component,  OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';

import {OrderConf,OrderInfoConf} from "./../../../conf/order.conf";


@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  
})

export class OrderComponent implements OnInit {

  // public status = ['ALL','FINISHED','PROCESSING','UNPAID','CANCELED'];
  public status = [
  {label:'全部',path:'/board/order/status',status:'ALL'},
  {label:'已完成',path:'/board/order/status',status:'FINISHED'},
  {label:'处理中',path:'/board/order/status',status:'PROCESSING'},
  {label:'未支付',path:'/board/order/status',status:'UNPAID'},
  {label:'已取消',path:'/board/order/status',status:'CANCELED'},];



  constructor(private route:Router, private router:ActivatedRoute){
    route.navigate(['/board/order/status','ALL']);
  }
  ngOnInit() {

    
    
  }
  
  TabChanged(event){
    console.log('************tab changed!**************');
    console.log(event);
    this.route.navigate(['/board/order/status',this.status[event.index]]);
    // if(event.index==0){
      
    // }else if(event.index==1){

    // }else if(event.index==2){
      
    // }else if(event.index==3){
      
    // }else{

    // }
  }
  
}

