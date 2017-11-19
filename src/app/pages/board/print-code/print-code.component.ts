import { Component, OnInit,Injector,AfterViewChecked ,ViewChildren,Renderer2,ElementRef } from '@angular/core';
import {  Router, ActivatedRoute, ParamMap   } from '@angular/router';
import {OrderDetailConf,OrderDetailInfosConf} from "./../../../conf/order_detail.conf";

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
  public order_detail : OrderDetailConf;



  constructor(injector: Injector,private router:Router,private route:ActivatedRoute, public el:ElementRef) {
    // this.printCSS = ['http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css'];
    console.log("route.data");
    console.log(this.route.data);
    console.log(this.route.data.map(res=>res));
    this.route.data.subscribe(res=>{
        this.order_detail = res['order_detail'];
    })
    console.log("order_datail");
    console.log(this.order_detail);

    this.printCSS =  [''];
    
    this.printStyle = `
      .print_content{
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          
          
      }
      .print_content .print_item{
        margin-top: 20px;
        margin-bottom: 20px;
          
      }
      .lab{
        font-size: 4px;
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


    this.printStyle = '';

    
  }
  ngAfterViewChecked(){
    let imgs = this.el.nativeElement.querySelectorAll('img');
    let infos = this.order_detail.parm.infos;
    console.log(infos);
    console.log(imgs);
    for(let i=0;i<infos.length;i++){
        $(imgs[i]).JsBarcode(infos[i].order_infoid,{
            margin:0,
            displayValue:false,
            width:1.2,
            height:40
        });
    }
  }


}
