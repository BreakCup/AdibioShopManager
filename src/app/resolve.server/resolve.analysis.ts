import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';
import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot ,ActivatedRouteSnapshot } from '@angular/router';
import { AnalysisResponse } from './../conf/analysis.conf';
import { GetAnalysisInfo } from './../public.server/http.getAnalysisInfo';

 
@Injectable()
export class AnalysisResolver implements Resolve<AnalysisResponse> {
  constructor(private server: GetAnalysisInfo, private router: Router) {
    
  }
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<AnalysisResponse> {
    let id = route.paramMap.get('infoid');
    this.server.order_infoid = id;
    return this.server.GetAnalysisInfo().then((result:AnalysisResponse)=>{
        if(result.parm.analysis){
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