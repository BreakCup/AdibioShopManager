import { HttpClient,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {OrderDetailConf} from './../conf/order_detail.conf'

import { HttpConf } from './../conf/http.conf';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpGetOrderDetail{

    oredrDetail:OrderDetailConf;


    constructor(private http:HttpClient,private httpConf:HttpConf){
        
    }

    GerOrderDetail(order_id:string){
        return this.http.get(this.httpConf.url+this.httpConf.getOrderDetail+'?'+'&order_id='+order_id)
        .toPromise()
        .then(response => response as OrderDetailConf)
        .catch(this.handleError);

    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }

}