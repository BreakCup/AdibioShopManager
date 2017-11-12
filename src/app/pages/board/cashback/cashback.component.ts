import { Component, OnInit ,ElementRef,ViewChild ,Input, OnChanges,SimpleChanges,KeyValueChanges } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material';
import {MatSort} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import {Router} from "@angular/router";

import {CashbackConf,CashbackParmConf} from "./../../../conf/cashback.conf";

import {HttpGerCashbackData} from "./../../../public.server/http.getCashbackData";

@Component({
  selector: 'cashback',
  templateUrl: './cashback.component.html',
  styleUrls: ['./cashback.component.css']
})

export class CashbackComponent implements OnInit {


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('filter') filter: ElementRef;

  public cashbackData:CashbackConf;
  
  displayedColumns = ['order_id', 'cashback','zhifubao','bank_card','status'];
  
  database :CashbackDatabase = new CashbackDatabase;
  dataSource : ExampleDataSource | null;

  constructor(private route:Router,private http:HttpGerCashbackData){
    console.log('*************tabl construct*********');
    
  }
  

  ngOnInit() {
    console.log('*************tabl oninit*********');
    this.dataSource = new ExampleDataSource(this.database, this.paginator);
    console.log(this.dataSource);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
    .debounceTime(150)
    .distinctUntilChanged()
    .subscribe(() => {
      if (!this.dataSource) { return; }
      this.dataSource.filter = this.filter.nativeElement.value;
    });

    this.http.GetLatestCashbackData().then(
      (result)=>{
        console.log('**********http***********')
        this.cashbackData = null;
        this.cashbackData = result;
        this.dataSource.refresh(result.parm);

    });
    

    
    
  }
  confirm(row){
    console.log('confirm!');
    this.http.confirm(row.share_id).then(
      (result)=>{
        console.log('****confirm******');
        if(result.result!='ok'){
          alert('请求错误！');
        }else{
          this.dataSource.change(row);
        }

    })
    
  }

  navigato(id){
    this.route.navigate(['board/detail',id]);
  }


 
 
  
}



export interface CashBackData {
order_id: string;
cashback:number;
zhifubao:string;
bank_card:string;
status:boolean;
share_id:string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class CashbackDatabase {



  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<CashBackData[]> = new BehaviorSubject<CashBackData[]>([]);
  get data(): CashBackData[] { return this.dataChange.value; };
  public cashbackData:CashbackConf;
  constructor() {

      this.cashbackData = {
        result: "0",
        errMsg: "0",
        parm: [{
          cashbacks: [
              {
              order_id: "0",
              order_infoid: "0",
              product_name: "0",
              unit_price: 0,
              discount: 0,
              cashback: 0
              }
          ],
          share: {
              row_id: 1,
              share_id: "0",
              from_id: "0",
              order_id: "0",
              _paid: false
          },
          whole_cashback: 0,
          customer: {
              customer_id: "0",
              telphone: null,
              email: null,
              openid: null,
              register_time: 0,
              zhifubao_account: "0",
              bank_card_number: "0"
          }
        }]
    };

    for (var i = 0; i < this.cashbackData.parm.length ; i++) {
      this.addCashbackDate(this.cashbackData.parm[i]); 
    }

    
    
    console.log('base-cons:'+this.cashbackData);

  }

  /** Adds a new data to the database. */
  addCashbackDate(cashbackParm:CashbackParmConf) {
    const copiedData = this.data.slice();
    copiedData.push((this.getOrder(cashbackParm)));
    this.dataChange.next(copiedData);
  }

  /** Builds and returns a new User. */
  public getOrder(cashbackParm:CashbackParmConf) {
    return {
      order_id: cashbackParm.share.order_id,
      cashback:cashbackParm.whole_cashback,
      zhifubao:cashbackParm.customer.zhifubao_account,
      bank_card:cashbackParm.customer.bank_card_number,
      status:cashbackParm.share._paid,
      share_id:cashbackParm.share.share_id,
    };
  }
}

/**
* Data source to provide what data should be rendered in the table. Note that the data source
* can retrieve its data in any way. In this case, the data source is provided a reference
* to a common data base, CashbackDatabase. It is not the data source's responsibility to manage
* the underlying data. Instead, it only needs to take the data and send the table exactly what
* should be rendered.
*/
export class ExampleDataSource extends DataSource<any> {

  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }


 
  constructor( public _cashbackdatabase:CashbackDatabase , public _paginator: MatPaginator) {
    super();
    

  }

  // /** Adds a new data to the database. */
  // addCashbackDate(cashbackParm:CashbackParmConf) {
  //   const copiedData = this.data.slice();
  //   copiedData.push((this.getOrder(cashbackParm)));
  //   this.dataChange.next(copiedData);
  // }

  // /** Builds and returns a new User. */
  // public getOrder(cashbackParm:CashbackParmConf) {
  //   return {
  //     order_id: cashbackParm.share.order_id,
  //     cashback:cashbackParm.whole_cashback,
  //     zhifubao:cashbackParm.customer.zhifubao_account,
  //     bank_card:cashbackParm.customer.bank_card_number,
  //     status:'',
  //   };
  // }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<CashBackData[]> {

    const displayDataChanges = [
      this._cashbackdatabase.dataChange,
      this._paginator.page,
      this._filterChange,
      
    ];


    return Observable.merge(...displayDataChanges).map(() => {

      const data = this._cashbackdatabase.data.slice();

      //筛选符合查找内容的数据
      var resultData = data.filter((item: CashBackData) => {
        let searchStr = (item.order_id).toLowerCase();           //item.order_id为查找的内容
        if(this.filter==''){
          return true;
        }
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;
      });
      this._paginator.length = resultData.length;
      var startIndex = this._paginator.pageIndex * this._paginator.pageSize;

      //如果是最后一页
      if(Math.floor(this._paginator.length/this._paginator.pageSize)-1 == this._paginator.pageIndex){
        console.log("********************last page!******************");
      }
      // if(startIndex > resultData.length){
      //   startIndex = 0;
      // }
      //返回符合条件的数据/某一页
      return resultData.splice(startIndex, this._paginator.pageSize);
    
    });

  
  }

  disconnect() {}

  //刷新数据
  refresh(newData:CashbackParmConf[]){
    this._cashbackdatabase.dataChange.next([]);
    this._cashbackdatabase.cashbackData.parm = newData;
    let datas = this._cashbackdatabase.data.slice();
    for(let data of newData){
      console.log('********for*********');
      console.log(datas);
      console.log(data);
      console.log(this._cashbackdatabase.getOrder(data));
      datas.push(this._cashbackdatabase.getOrder(data));
    }
    this._cashbackdatabase.dataChange.next(datas);
  }

  //加入数据
  add(newData:CashbackParmConf){
    let datas = this._cashbackdatabase.data.slice();
    datas.push(this._cashbackdatabase.getOrder(newData));
    this._cashbackdatabase.dataChange.next(datas);

  }
  //清空数据
  clean(){
    this._cashbackdatabase.dataChange.next([]);
  }

  // 通过http获取数据
  GetPartOrder(){

  }
  change(row){
    let datas = this._cashbackdatabase.data.slice();
    let pos = 0;
    for(let i =0; i<datas.length;i++){
      if(datas[i].order_id = row.order_id){
        pos = i;
        break;
      }
    }
    datas[pos].status = true;
    this._cashbackdatabase.dataChange.next(datas);
  }
}