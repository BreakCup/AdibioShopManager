import { HttpClient,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductList,ProductDiscountList } from './../conf/product.conf'
import { HttpConf } from './../conf/http.conf';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HttpProduct{




    constructor(private http:HttpClient,private httpConf:HttpConf){
        
    }

    GerProductList(product_groupid):Promise<ProductList>{
        return this.http.get(this.httpConf.url+this.httpConf.getProductList+'?product_groupid=' + product_groupid )
        .toPromise()
        .catch(this.handleError);
    }
    GerProductDiscont(product_id):Promise<ProductDiscountList>{
        return this.http.get(this.httpConf.url+this.httpConf.getProductDiscontList+'?product_id=' + product_id )
        .toPromise()
        .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.log(error.headers.status);
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
        
      }

}