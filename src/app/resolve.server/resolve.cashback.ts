import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';
import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot ,ActivatedRouteSnapshot } from '@angular/router';
import { CashbackConf } from './../conf/cashback.conf';
import { HttpGerCashbackData } from './../public.server/http.getCashbackData';

 
@Injectable()
export class CashbackResolver implements Resolve<CashbackConf> {
  constructor(private server: HttpGerCashbackData, private router: Router) {
    
  }
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<CashbackConf> {
    let status = route.paramMap.get('status');
    this.server.row_id = 0;
    this.server.status = status;
    return this.server.GetLatestCashbackData().then((result:CashbackConf)=>{
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