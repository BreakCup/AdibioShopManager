import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpParams,HttpHeaders} from '@angular/common/http';

import {ExpressageInfo} from './../conf/order_detail.conf'
import { HttpConf } from './../conf/http.conf';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class Expressage{


    constructor(private http:HttpClient,private httpConf:HttpConf){}

    public GetExpressageInfo(infoid):Promise<ExpressageInfo>{
        

        
        return this.http.get(this.httpConf.url+this.httpConf.getExpressageInfo + "?order_infoid="+infoid)
        .toPromise()
        .catch(this.handleError);
    }

    public UpDateExpressageInfo(info):Promise<ExpressageInfo>{
        return this.http.get(this.httpConf.url+this.httpConf.updateExpressageInfo + 
            "?order_infoid="+info.order_infoid + 
            "&company="+ info.company + 
            "&expressage_number=" + info.expressage_number)
        .toPromise()
        .catch(this.handleError);
    }




    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    


}