import { HttpClient,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {OrderConf} from './../conf/order.conf'

import { HttpConf } from './../conf/http.conf';

import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpGetOrder{

    latestOrder:OrderConf;
    constructor(private http:HttpClient,private httpConf:HttpConf){

    }
    public GetLatestOrder(limit:number,status:string):Promise<OrderConf>{
        // var promise = new Promise(function(resolve, reject) {
        //     let req = this.http.get(this.remoteUrl.url+'/latest_orders?limit='+limit.toString()+'&status='+status)
        //     .subscribe(data=>{return data})
        //     if (req){
        //     resolve(req);
        //     } else {
        //     reject(req.error);
        //     }
        //    });
        return this.http.get(this.httpConf.url+'/latest_orders?limit='+limit.toString()+'&status='+status)
        .toPromise()
        .then(response => response as OrderConf)
        .catch(this.handleError);
        
        // return this.http.get(this.remoteUrl.url+'/latest_orders?limit='+limit.toString()+'&status='+status)
        // .map((res:any)=>{
        //     console.log(res);
        //     return res;
        // });
       

        // .subscribe(
        //   // Successful responses call the first callback.
        //   data => {
        //     console.log(data);
        //     this.result = data;
        //   },
        //   // Errors will call this callback instead:
        //   (err: HttpErrorResponse)=> {
        //     if (err.error instanceof Error) {
        //     // A client-side or network error occurred. Handle it accordingly.
        //     console.log('An error occurred:', err.error.message);
        //     } else {
        //     // The backend returned an unsuccessful response code.
        //     // The response body may contain clues as to what went wrong,
        //     console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        //     }
        //     this.result.result='error';
        //   }
        // );
    
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }

    public GetPartOrder(limit:number,status:string,row_id:number): Observable<any>{
        return this.http.get(this.httpConf.url+'/part_orders?limit='+limit.toString()+'&status='+status+"&row_id="+row_id)
        .map((res:any)=>{
            console.log(res);
            return res;
        });
    }
}