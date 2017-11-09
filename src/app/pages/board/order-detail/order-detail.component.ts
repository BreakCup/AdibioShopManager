import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, ParamMap   } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {  HttpGetOrderDetail  } from './../../../public.server/http.getOrderDetail';



@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  public show:boolean;
  public tip:string;
  public order_id:string;
  public order_info = {
    result: "",
    errMsg: "",
    parm: {
        wechat: {
            customer_id: "",
            openid: "",
            nickname: "",
            sex: "",
            province: "",
            city: "",
            headimgurl: ""
        },
        events: [
            {
                order_eventid: "",
                order_id: "",
                event_time: 0,
                event_title: "",
                event_executor: "",
                description: null
            },
            {
                order_eventid: "",
                order_id: "",
                event_time: 0,
                event_title: "",
                event_executor: "",
                description: null
            }
        ],
        infos: [
            {
                order_id: "",
                order_itemid: "",
                order_infoid: "",
                product_id: "",
                product_name: "",
                unit_price: 0,
                order_patient_infoid: "",
                name: "",
                gender: "",
                age: 20,
                country: "",
                province: "",
                city: "",
                district: "",
                address: "",
                phone: "",
                has_diabetic: 0,
                height: 0,
                weight: 0
            }
        ],
        order: {
            row_id: 0,
            order_id: "",
            customer_id: "",
            price: 0,
            status: "",
            description: null
        }
    }
  };
  constructor(private router:Router,private route:ActivatedRoute,private http:HttpGetOrderDetail) { 
    this.show = true;
    this.tip = '修改信息';
    
  }

  ngOnInit() {
    //获取id;
    var str = '';
    this.route.paramMap
    .switchMap((param:ParamMap)=>param.get('id'))
    .subscribe((result)=>{
        str += result;
    });
    this.order_id = str;
    console.log('***************************order_id**************************');
    console.log(this.order_id);
    this.http.GerOrderDetail(this.order_id).then(
        (result)=>{
            this.order_info = result;

    },
        (errMsg)=>{
            console.log("an error happen");
            console.log(errMsg);

    });

  }


  change(event){

    this.show=!this.show;
    if(this.show){

        this.tip = '修改信息';
        console.log(this.order_info);
    }
      
    else{
        this.tip = '确认修改';
        
    }
      
    
  }
  print(){
    this.router.navigate(['/board/print',this.order_id]);
  }

}
