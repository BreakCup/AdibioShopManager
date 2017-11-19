import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, ParamMap   } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {  HttpGetOrderDetail  } from './../../../public.server/http.getOrderDetail';
import {OrderDetailConf} from "./../../../conf/order_detail.conf";


@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  public show:boolean;
  public tip:string;
  public order_id:string;
  public order_detail:OrderDetailConf;

  constructor(private router:Router,private route:ActivatedRoute,private http:HttpGetOrderDetail) { 
    this.show = true;
    this.tip = '修改信息';
    this.route.data.subscribe((res)=>{
        this.order_detail = res['order_detail'];
        this.order_id = this.order_detail.parm.order.order_id;
    });
    
  }

  ngOnInit() {}

  change(event){

    this.show=!this.show;
    if(this.show){

        this.tip = '修改信息';
        console.log(this.order_detail);
    }
      
    else{
        this.tip = '确认修改';
        
    }
  }
  test(event){
    console.log(event);
  }
  print(){
    
    this.router.navigate(['board/print',this.order_id]);
  }

}
