import { HttpClient,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {OrderDetailConf} from './../conf/order_detail.conf'

import { HttpConf } from './../conf/http.conf';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class HttpGetOrderDetail{

    oredrDetail:OrderDetailConf;


    constructor(private http:HttpClient,private httpConf:HttpConf){
        
    }

    GerOrderDetail(order_id:string){
        Observable.forkJoin(
            this.http.get(this.httpConf.url+this.httpConf.getOrderDetail+'?'+'&order_id='+order_id),
            
        );
        return this.http.get(this.httpConf.url+this.httpConf.getOrderDetail+'?'+'&order_id='+order_id)
        .toPromise()
        .then(response => response as OrderDetailConf)
        .catch(this.handleError);

    }
    private handleError(error: any): Promise<any> {
        console.log(error.headers.status);
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
        
      }

}