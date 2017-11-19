import { HttpClient,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {OrderConf} from './../conf/order.conf'

import { HttpConf } from './../conf/http.conf';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpGetOrder{

    // public status = ['ALL','FINISHED','PROCESSING','UNPAID','CANCELED'];
    public row_id : {
        'ALL':Number;
        'FINISHED':Number;
        'PROCESSING':Number;
        'UNPAID':Number;
        'CANCELED':Number;
    } = {
        'ALL' :0,
        'FINISHED' :0,
        'PROCESSING' :0,
        'UNPAID' :0,
        'CANCELED' : 0,
    };


    constructor(private http:HttpClient,private httpConf:HttpConf){


    }
    public GetLatestOrder(status:string):Promise<OrderConf>{
        return this.http.get(this.httpConf.url+'/latest_orders?limit='+this.httpConf.order_limit.toString()+'&status='+status)
        .toPromise()
        .then((response:OrderConf) =>{
            //parm 非空数组
            if(response.parm.length > 0){
               
                this.row_id[status] = response.parm[response.parm.length-1].row_id;
                
            }else{
                this.row_id[status] = 0;
            }
            console.log("***************in http server get lastaer oredr");
            console.log(this.row_id[status]);
            return response as OrderConf;
        })
        .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }

    public GetPartOrder(status:string): Promise<OrderConf>{
        return this.http.get(this.httpConf.url+'/part_orders?limit='+this.httpConf.order_limit.toString()+'&status='+status+"&start_row="+this.row_id[status].toString())
        .toPromise()
        .then((response:OrderConf) =>{
            //parm 非空数组
            if(response.parm.length > 0){
                
                this.row_id[status] = response.parm[response.parm.length-1].row_id;
                
            }else{
                this.row_id[status] = 0;
            }
            console.log("***************in http server get part oredr");
            console.log(this.row_id[status]);
            return response as OrderConf;
        })
        .catch(this.handleError);

    }
}