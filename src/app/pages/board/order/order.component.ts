import { Component,  OnInit } from '@angular/core';


import {OrderConf,OrderInfoConf} from "./../../../conf/order.conf";

import {HttpGetOrder} from "./../../../public.server/http.getOrder.server";

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  
})

export class OrderComponent implements OnInit {

  public AllData:OrderConf | null;
  public UnpaidData:OrderConf | null;
  public FinData:OrderConf | null;
  public ProcData:OrderConf | null;
  public CanceledData:OrderConf | null;
  public status = ['ALL','FINISHED','PROCESSING','UNPAID','CANCELED'];
  




  constructor(public http:HttpGetOrder){
    
    this.AllData = this.UnpaidData = this.CanceledData = this.FinData = this.ProcData = {
      result: '',
      errMsg: '',
      parm: [{
        row_id: 0,
        order_id: "",
        customer_id: "",
        price: 0,
        status: "",
        description: null
      }]
    };
    console.log("###########order constructor!############");
    
    
  }
  ngOnInit() {
    for (let status of this.status){
      var promise = this.http.GetLatestOrder(20,status);
      promise.then(
        (res)=>{
          console.log('*************http res*********');
          console.log(res);
          this.AllData = this.UnpaidData = this.CanceledData = this.FinData = this.ProcData = null;
          switch(status){
            case 'ALL':
            this.AllData = res;
            break;
            case 'FINISHED':
            this.FinData = res;
            break;
            case 'PROCESSING':
            this.ProcData = res;
            break;
            case 'UNPAID':
            this.UnpaidData = res;
            break;
            case 'CANCELED':
            this.CanceledData = res;
            break;

          }
          
  
        },
        (erro)=>{
          console.log('*************http error*********');
          console.log(erro);
        }
      );
    }
    
    
  }
  TabChanged(event,index:number){
    if(event.index==0){
      
    }else if(event.index==1){

    }else if(event.index==2){
      
    }else if(event.index==3){
      
    }
  }
  
}

