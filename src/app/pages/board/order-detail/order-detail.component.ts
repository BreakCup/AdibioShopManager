import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, ParamMap   } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {  HttpGetOrderDetail  } from './../../../public.server/http.getOrderDetail';
import {  Expressage  } from './../../../public.server/http.expressage';

import {OrderDetailConf,ExpressageInfo} from "./../../../conf/order_detail.conf";
import {HttpConf} from "./../../../conf/http.conf";

@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  public show:boolean;
  public tip:string;
  public show_trans:boolean;
  public tip_trans:string;
  public order_id:string;
  public order_detail:OrderDetailConf;
  public expressageInfo = {};
  public infoDisabled = false;
  public expressDisabled = false;

  constructor(private router:Router,
    private route:ActivatedRoute,
    private http:HttpGetOrderDetail,
    private httpExpressage:Expressage,
    private httpconf:HttpConf) { 
    this.show = true;
    this.tip = '修改检测人信息';
    this.show_trans = true;
    this.tip_trans = '修改物流信息';

    this.route.data.subscribe((res)=>{
        this.order_detail = res['order_detail'];
        this.order_id = this.order_detail.parm.order.order_id;

    });
    for(let info of this.order_detail.parm.infos){
      this.httpExpressage.GetExpressageInfo(info.order_infoid).then(res=>{
        if(res.result=="ok"){
          this.expressageInfo[info.order_infoid]=res;
          if(res.parm==null){
            this.expressageInfo[info.order_infoid].parm = {
                expressage_id: '',
                order_infoid: '',
                company: '',
                expressage_number: ''
            };
          }
        }
      });
    }
  }

  ngOnInit() {}

  change(info){
    var xml = new XMLHttpRequest();
    var url = this.httpconf.url + this.httpconf.updataPatientInfo;
    
    this.show=!this.show;
    if(this.show){
      this.infoDisabled = true;
      xml.open('POST',url);
      xml.setRequestHeader("Content-Type","application/json");
      xml.onreadystatechange = ()=>{
        this.infoDisabled = false;
        if(xml.readyState==4 && xml.status==200){
          this.tip = '修改检测人信息';
          alert("保存成功！");
        }else if(xml.readyState==4){
          this.show=!this.show;
          alert("保存失败！");
        }
      }
      xml.send(JSON.stringify(info));
    }
    else{
        this.tip = '确认修改';
    }
  }
  SaveTrans(info){
    this.show_trans=!this.show_trans;
    this.expressageInfo[info.order_infoid].parm.order_infoid = info.order_infoid;

    var xml = new XMLHttpRequest();
    var url = this.httpconf.url + this.httpconf.updateExpressageInfo;
    
    if(this.show_trans){
      this.expressDisabled = true;
      xml.open('POST',url);
      xml.setRequestHeader("Content-Type","application/json");
      xml.onreadystatechange = ()=>{
        this.expressDisabled = false;
        if(xml.readyState==4 && xml.status==200){
          this.tip_trans = '修改物流信息';
          alert("修改成功！");
        }else if(xml.readyState==4){
          this.show_trans=!this.show_trans;
          alert("修改失败！");
        }
      }
      xml.send(JSON.stringify(this.expressageInfo[info.order_infoid].parm));
      
    }else{
        this.tip_trans = '确认修改';
    }
  }
  print(){
    
    this.router.navigate(['board/print',this.order_id]);
  }
  result(info){
    this.router.navigate(['board/result-detail',info.order_infoid]);
  }


}
