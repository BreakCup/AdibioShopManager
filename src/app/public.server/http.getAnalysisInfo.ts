import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpParams,HttpHeaders} from '@angular/common/http';

import {AnalysisResponse,AnalysisInfo} from './../conf/analysis.conf'
import { HttpConf } from './../conf/http.conf';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GetAnalysisInfo{

    public xml = new XMLHttpRequest();
    public order_infoid;

    constructor(private http:HttpClient,private httpConf:HttpConf){}

    public GetAnalysisInfo():Promise<AnalysisResponse>{
        

        return this.http.get(this.httpConf.url+this.httpConf.getAnalysisInfo+"?order_infoid="+this.order_infoid)
        .toPromise()
        .then((response:AnalysisResponse) =>{
            console.log("************** get analysis **********");
            console.log(response);
            if(response.parm != null)
                return response;
            else if(response.parm == null )
                return this.CreatAnalysis();
        })
        .catch(this.handleError);
    }
    public test():Promise<AnalysisResponse>{
        var body = new HttpParams().append('data','123');
        return this.http.post("http://shop.adibio.cn/admin/post_data",body)
        .toPromise()
        .then((response:AnalysisResponse) =>{
            return response;
        })
        .catch(this.handleError);
    }

    public CreatAnalysis():Promise<AnalysisResponse>{
        
        
        var body = new HttpParams().append('order_infoid',this.order_infoid);
        return this.http.post(this.httpConf.url+this.httpConf.creakAnalysisInfo,body)
        .toPromise()
        .then((value:AnalysisResponse) =>{
            console.log("************** creat analysis **********");
            console.log(value);
            if(value.result=="ok")
                return this.GetAnalysisInfo();
            else
                return value;
        })
        .catch(this.handleError);
        
    }

    public Updata(analysis:AnalysisInfo): Promise<any>{
        // var body = new HttpParams()
        // .append('analysis_id',analysis.analysis_id)
        // .append('order_infoid',analysis.order_infoid)
        // .append('result',analysis.result)
        // .append('collection_date',analysis.collection_date)
        // .append('analysis_date',analysis.analysis_date);
        this.xml.open('POST',this.httpConf.url+this.httpConf.updataAnalysis,true);
        this.xml.setRequestHeader("Content-Type","application/json");

        let header = new HttpHeaders();
        header.set('Content-Type','application/json');
        return this.http.post(this.httpConf.url+this.httpConf.updataAnalysis,
            JSON.stringify(analysis),
            {headers:header})
        .toPromise()
        .then((value:AnalysisResponse) =>{
            console.log("************** updata analysis **********");
            console.log(value);
            return value;
        })
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    


}