import { Component, OnInit } from '@angular/core';
import { ProductList,ProductDiscount } from "./../../../conf/product.conf"
import { HttpConf } from "./../../../conf/http.conf"
import { HttpProduct } from "./../../../public.server/http.product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products:ProductList;
  public productDisconts = {};
  public proInfoDisabled = true;
  public disInfoDisabled = true;
  public loading = 0;
  public proDisabled = false;
  public productTip = '修改产品信息';
  public discountDisabled = false;
  public discountTip = '修改优惠信息';

  
  constructor(private httpProduct:HttpProduct,private httpconf:HttpConf ) {
    httpProduct.GerProductList('1').then(res=>{
      if(res.result=='ok'){
        this.products = res;
        for(let product of res.parm)
          httpProduct.GerProductDiscont(product.product_id).then(
            res=>{
              this.productDisconts[product.product_id] = res;
              this.loading += 1;
            });
      }else{
        alert("加载错误！");
      }
    })
   }

  ngOnInit() {
  }

  SaveProduct(product){
    this.proInfoDisabled  = !this.proInfoDisabled;

    var xml = new XMLHttpRequest();
    var url = this.httpconf.url + this.httpconf.updateProduct;

    if(this.proInfoDisabled){
      //保存项目信息

      this.proDisabled = true;
      xml.open('POST',url);
      xml.setRequestHeader("Content-Type","application/json");
      xml.onreadystatechange = ()=>{
        this.proDisabled = false;
        if(xml.readyState==4 && xml.status==200){
          this.productTip = '修改产品信息';
          alert("修改成功！");
        }else if(xml.readyState==4){
          this.proInfoDisabled  = !this.proInfoDisabled;
          alert("修改失败！");
        }
      }
      xml.send(JSON.stringify(product));
      
      
    }else{
      //修改项目信息
      this.productTip = '保存产品信息';
    }
  }

  SaveDiscount(product){
    this.disInfoDisabled  = !this.disInfoDisabled;

    var xml = new XMLHttpRequest();
    var url = this.httpconf.url + this.httpconf.updateProductDiscont;

    if(this.disInfoDisabled){
      //保存优惠信息
      this.discountDisabled = true;
      xml.open('POST',url);
      xml.setRequestHeader("Content-Type","application/json");
      xml.onreadystatechange = ()=>{
        this.discountDisabled = false;
        if(xml.readyState==4 && xml.status==200){
          this.discountTip = '修改优惠信息';
          alert("修改成功！");
        }else if(xml.readyState==4){
          this.disInfoDisabled  = !this.disInfoDisabled;
          alert("修改失败！");
        }
      }
      xml.send(JSON.stringify(this.productDisconts[product.product_id].parm[0]));

      
    }else{
      //修改项目信息
      this.discountTip = '保存优惠信息';
    }
  }


}
