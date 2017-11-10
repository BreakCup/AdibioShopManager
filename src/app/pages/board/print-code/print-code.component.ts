import { Component, OnInit,Injector,AfterViewChecked ,ViewChildren,Renderer2,ElementRef } from '@angular/core';
import {  Router, ActivatedRoute, ParamMap   } from '@angular/router';
import {  HttpGetOrderDetail  } from './../../../public.server/http.getOrderDetail';
import {OrderDetailConf,OrderDetailInfosConf} from "./../../../conf/order_detail.conf";
import {HttpConf} from "./../../../conf/http.conf";
declare var $:any;

@Component({
  selector: 'print-code',
  templateUrl: './print-code.component.html',
  styleUrls: ['./print-code.component.css']
})
export class PrintCodeComponent implements OnInit, AfterViewChecked {


  printCSS: string[];
  printStyle: string;
  public order_id:string;
  public order_info:OrderDetailConf | null;
  public httpconf:HttpConf;


  constructor(injector: Injector,private router:Router,private route:ActivatedRoute,private http:HttpGetOrderDetail,  public el:ElementRef) {
    // this.printCSS = ['http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css'];
    
    this.printCSS =  [''];
    
    `
      .print_content{
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          
          
      }
      .print_content .print_item{
        position: relative;
        width:30mm;
        height:20mm;
        margin-top: 20px;
        margin-bottom: 20px;
          
      }
      
    `;


   }

   printBtnBoolean = true;
   printComplete() {
       this.printBtnBoolean = true;
   }
   beforePrint() {
       this.printBtnBoolean = false;
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

    this.printStyle = '';
    this.http.GerOrderDetail(this.order_id).then(
        (result)=>{
            this.order_info = result;
            var id:string = result.parm.infos[0].order_infoid;
            console.log("infoid");
            console.log(result.parm.infos[0].order_infoid);

            
    },
        (errMsg)=>{
            console.log("an error happen");
            console.log(errMsg);

    });

    
  }
  ngAfterViewChecked(){
    let imgs = this.el.nativeElement.querySelectorAll('img');
    let infos = this.order_info.parm.infos;
    console.log(infos);
    console.log(imgs);
    for(let i=0;i<infos.length;i++){
        $(imgs[i]).JsBarcode(infos[i].order_infoid);
    }
  }


}
