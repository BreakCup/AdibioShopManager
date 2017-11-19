import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';
import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot ,ActivatedRouteSnapshot } from '@angular/router';
import { OrderConf } from './../conf/order.conf';
import { HttpGetOrder } from './../public.server/http.getOrder.server';

 
@Injectable()
export class OrderResolve implements Resolve<OrderConf> {
  constructor(private server: HttpGetOrder, private router: Router) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<OrderConf>{
    let status = route.paramMap.get('status');
    this.server.row_id = {
        'ALL' :0,
        'FINISHED' :0,
        'PROCESSING' :0,
        'UNPAID' :0,
        'CANCELED' : 0,
    };
    
    return this.server.GetLatestOrder(status).then((result:OrderConf)=>{
        
        if(result){
            console.log('**********right result!*********');
            console.log(result);
            return result;
        }
        else{
            console.log('**********worry result!*********');
            console.log(result);
            return null;
        }
    });
  }
}