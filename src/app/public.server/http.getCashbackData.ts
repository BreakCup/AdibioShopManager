import { HttpClient,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {CashbackConf,ConfirmConf} from './../conf/cashback.conf'

import { HttpConf } from './../conf/http.conf';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpGerCashbackData{
    row_id:number = 0;

    constructor(private http:HttpClient,private httpConf:HttpConf){}

    public GetLatestCashbackData():Promise<CashbackConf>{
        return this.http.get(this.httpConf.url+this.httpConf.getLatestCashbackData+"?limit="+this.httpConf.cashback_limit)
        .toPromise()
        .then(response => response as CashbackConf)
        .catch(this.handleError);
    }

    public confirm(share_id):Promise<ConfirmConf>{
        return this.http.get(this.httpConf.url+this.httpConf.confirm+"?share_id="+share_id)
        .toPromise()
        .then(response => response as ConfirmConf)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }


}