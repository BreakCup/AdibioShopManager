import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AnalysisResponse } from "./../../../conf/analysis.conf";
import { GetAnalysisInfo } from "./../../../public.server/http.getAnalysisInfo";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public searched = false;
  public hasFound = false;
  public order_infoid:string;

  public analysisInfo:AnalysisResponse;
  constructor(private http:GetAnalysisInfo,private route:Router) { 
    this.order_infoid = '';
  }

  ngOnInit() {
  }
  search(){
    this.searched = true;
    console.log(this.order_infoid);
    this.http.GetAnalysisInfo().then((res:AnalysisResponse)=>{
      if(res.result == 'err'){
        this.hasFound = false;
      }else{
        this.analysisInfo = res;
        this.hasFound = true;
        this.edit();
      }
    });
  }
  Input(event){
    console.log("****************input****************");
    this.http.order_infoid = event.target.value;
    this.order_infoid = event.target.value;
  }
  test(){
    this.http.test();
  }
  edit(){
    this.route.navigate(['board/result-detail',this.http.order_infoid]);
  }
  KeyUp(event){
    if(event.key=='Enter'){
      this.search();
    }
  }
}
