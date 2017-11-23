import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute   } from '@angular/router';
import { AnalysisResponse } from './../../../conf/analysis.conf';
import { GetAnalysisInfo } from "./../../../public.server/http.getAnalysisInfo";
import { HttpConf } from './../../../conf/http.conf';

@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.css']
})
export class ResultDetailComponent implements OnInit {
  public cannotClick = false;
  public cannotEdit = true;
  public btnTip = '修改结果';
  public analysisInfo:AnalysisResponse;
  constructor(private route:ActivatedRoute,private http :GetAnalysisInfo,private httpconf:HttpConf) { 
    route.data.subscribe(res=>{
      this.analysisInfo = res['analysisResponse']
      if(!this.analysisInfo.parm.analysis)
        alert("获取数据错误，请刷新页面！");
    });
    console.log("************** result-detail get analysisinfo****************");
    console.log(this.analysisInfo);
  }

  ngOnInit() {
  }
  
  Edit(){
    // if(!this.cannotEdit){
    //   //保存检测结果 输入框变为不可输入
    //   this.cannotClick = true;
    //   this.btnTip = '修改结果';
    //   this.http.Updata(this.analysisInfo.parm.analysis).then(res=>{
    //     this.cannotClick = false;
    //     if(res.result=='ok'){
    //       
    //       this.cannotEdit = !this.cannotEdit;
    //     }else{
    //       alert("保存失败！");
    //     }
    //   });

    // }else{
    //   //修改检测结果 输入框变为可输入
    //   this.cannotEdit = !this.cannotEdit;
    //   this.btnTip = '保存结果';
    // }

    
    var xml = new XMLHttpRequest();
    var url = this.httpconf.url+ this.httpconf.updataAnalysis;
    if(!this.cannotEdit){
      //保存检测结果 输入框变为不可输入
      this.cannotClick = true;
      xml.open('POST',url);
      xml.setRequestHeader("Content-Type","application/json");
      xml.onreadystatechange = (ev)=>{
        this.cannotClick = false;
        if(xml.status==200 && xml.readyState==4){
          console.log("******成功！*******");
          console.log(xml);
          this.btnTip = '修改结果';
          this.cannotEdit = !this.cannotEdit;
          alert("成功保存！");
        }else if(xml.status!=200 && xml.readyState==4){
          alert("成功失败!");
        }
  
      }
      xml.send(JSON.stringify(this.analysisInfo.parm.analysis));

    }else{
      //修改检测结果 输入框变为可输入
      this.cannotEdit = !this.cannotEdit;
      this.btnTip = '保存结果';
    }

    

  }

}
