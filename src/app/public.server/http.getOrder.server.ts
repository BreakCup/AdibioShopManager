import { HttpClient,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {OrderConf} from './../conf/order.conf'

import { HttpConf } from './../conf/http.conf';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpGetOrder{

    all_row:number=0;
    unpaid_row:number=0;
    fin_row:number=0;
    proc_row:number=0;
    cancel_row:number=0;

    latestOrder:OrderConf;

    constructor(private http:HttpClient,private httpConf:HttpConf){

    }
    public GetLatestOrder(limit:number,status:string):Promise<OrderConf>{

        return this.http.get(this.httpConf.url+'/latest_orders?limit='+limit.toString()+'&status='+status)
        .toPromise()
        .then(response => response as OrderConf)
        .catch(this.handleError);

    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }

    public GetPartOrder(limit:number,status:string,row_id:number): Promise<OrderConf>{
        return this.http.get(this.httpConf.url+'/part_orders?limit='+limit.toString()+'&status='+status+"&row_id="+row_id)
        .toPromise()
        .then(response => response as OrderConf)
        .catch(this.handleError);

    }
}