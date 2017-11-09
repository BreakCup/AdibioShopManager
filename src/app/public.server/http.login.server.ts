import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpConf } from './../conf/http.conf';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpLogin{
    private body = {
        username:'admin',
        password:'admin'
    };
    constructor(private http:HttpClient,private httpConf:HttpConf){
    
    }
    HttpLogin(user:string , pass:string){
        this.body.username = user;
        this.body.password = pass;
        return this.http.post(this.httpConf.url+'/dologin', this.body )
        .toPromise()
        .then(response => response)
        .catch(this.handleError);

        }
        private handleError(error: any): Promise<any> {
            console.error('An error occurred', error); // for demo purposes only
            return Promise.reject(error.message || error);
        }
        // if(this.http.post(this.httpConf.url+'/dologin',this.body).subscribe(
        //     // Successful responses call the first callback.
        //     (data:response) => {
        //         console.log('##########################################');
        //         console.log(data);
        //         if(data.result=='ok'){
        //             return true;
                   
        //         }else{
        //             return false;
        //         }
                

        //     },
        //     // Errors will call this callback instead:
        //     (err: HttpErrorResponse) => {
        //         if (err.error instanceof Error) {
        //             // A client-side or network error occurred. Handle it accordingly.
        //             console.log('An error occurred:', err.error.message);
        //         } else {
        //             // The backend returned an unsuccessful response code.
        //             // The response body may contain clues as to what went wrong,
        //             console.log(err);
        //             console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        //         }
        //     })
        // ){
        //     //成功登录
        //     return true;
        // }else{
        //     //密码错误
        //     return false;
        // }

        
    
}
interface response{
    result:string;
    errMsg:string;
    parm:object;
}