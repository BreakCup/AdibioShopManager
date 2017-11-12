import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';
import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot ,ActivatedRouteSnapshot } from '@angular/router';
import { OrderDetailConf } from './../conf/order_detail.conf';
import { HttpGetOrderDetail } from './../public.server/http.getOrderDetail';

 
@Injectable()
export class OrderDetailResolver implements Resolve<OrderDetailConf> {
  constructor(private server: HttpGetOrderDetail, private router: Router) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<OrderDetailConf> {
    let id = route.paramMap.get('id');
 
    return this.server.GerOrderDetail(id).then((result:OrderDetailConf)=>{
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