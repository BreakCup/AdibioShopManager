import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpConf } from './../conf/http.conf';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpLogin{

    constructor(private http:HttpClient,private httpConf:HttpConf ){
    
    }
    HttpLogin(user:string , passwd:string){
        // var body = 'username=' + user.toString() +"&password=" + pass.toString();
        var body = new HttpParams().append('username',user).append('password',passwd);
        console.log(body);
        return this.http.post(this.httpConf.url+'/dologin' ,body)
        .toPromise()
        .then(response => response)
        .catch(this.handleError);

        }
        private handleError(error: any): Promise<any> {
            console.error('An error occurred'); // for demo purposes only
            console.log(error)
            
            // return error;
            // console.error('An error occurred', error); // for demo purposes only
            return Promise.reject(error.message || error);
        }

        
    
}
interface response{
    result:string;
    errMsg:string;
    parm:object;
}