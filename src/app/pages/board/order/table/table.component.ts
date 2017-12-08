import { Component, OnInit ,ElementRef,ViewChild ,Input,OnChanges } from '@angular/core';
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

import {Router ,ActivatedRoute } from "@angular/router";

import {OrderConf,OrderInfoConf} from "./../../../../conf/order.conf";

import {HttpGetOrder} from "./../../../../public.server/http.getOrder.server";

@Component({
  selector: 'order-table',
  // template: '1',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
  
})

export class TableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('filter') filter: ElementRef;

  
  displayedColumns = ['order_id', 'price','status'];
  exampleDatabase : ExampleDatabase;
  dataSource: ExampleDataSource | null;
  OrderData:OrderConf;
  status:string;
  
  constructor(private route:Router,private router:ActivatedRoute , private http:HttpGetOrder){
    console.log('*************tabl construct*********');
    this.status =  this.router.params['value']['status'];
    console.log(this.status);
    

    
  }
  
  ngOnChanges(){
    console.log('****************data changed!*****************')
    
    

  }
  ngOnInit() {
    console.log("***************oninit****************");
    this.router.data.subscribe(res=>{
      this.OrderData = res['orderData'];
      console.log("***********DATA ORDERDATA**********");
      console.log(this.OrderData);
      this.exampleDatabase = null;
      this.dataSource = null;
      this.exampleDatabase = new ExampleDatabase(this.OrderData);
      this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator,this.http,this.status);
      this.dataSource.refresh(this.OrderData.parm);
      this.dataSource._paginator.pageIndex = 0;
    });
    
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
    .debounceTime(150)
    .distinctUntilChanged()
    .subscribe(() => {
      if (!this.dataSource) { return; }
      this.dataSource.filter = this.filter.nativeElement.value;
    });
    
  }

  Onclick(row){
    console.log('***************click row:******************')
    console.log(row);
    this.route.navigate(["board/detail",row.order_id]);
  }
  GetStatus(status){
    switch(status){
      case 'PAID':
        return '已完成';
    }
  }
  
}



export interface UserData {
order_id: string;
price:number;
status:string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {



  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }
  public orderData:OrderConf
  constructor(orderData:OrderConf) {
    // Fill up the database with 100 users.
    this.orderData = orderData;

    for (var i = 0; i < this.orderData.parm.length ; i++) {
      this.addUser(this.orderData.parm[i]); 
    }

  }

  /** Adds a new user to the database. */
  addUser(orderInfos:OrderInfoConf) {
    const copiedData = this.data.slice();
    copiedData.push((this.getOrder(orderInfos)));
    this.dataChange.next(copiedData);
  }

  /** Builds and returns a new User. */
  public getOrder(orderInfo:OrderInfoConf) {


    return {
      order_id: orderInfo.order_id,
      price: orderInfo.price, 
      status:orderInfo.status,
    };
  }
}

/**
* Data source to provide what data should be rendered in the table. Note that the data source
* can retrieve its data in any way. In this case, the data source is provided a reference
* to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
* the underlying data. Instead, it only needs to take the data and send the table exactly what
* should be rendered.
*/
export class ExampleDataSource extends DataSource<any> {

  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(
    public _exampleDatabase: ExampleDatabase, 
    public _paginator: MatPaginator,
    private http:HttpGetOrder,
    private status:string) {

    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserData[]> {

    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._paginator.page,
      this._filterChange,
      
    ];


    return Observable.merge(...displayDataChanges).map(() => {

      const data = this._exampleDatabase.data.slice();

      //筛选符合查找内容的数据
      var resultData = data.filter((item: UserData) => {
        let searchStr = (item.order_id).toLowerCase();           //item.order_id为查找的内容
        if(this.filter==''){
          return true;
        }
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;
      });
      this._paginator.length = resultData.length;
      var startIndex = this._paginator.pageIndex * this._paginator.pageSize;

      if((this._paginator.pageIndex+1)*this._paginator.pageSize>=this._paginator.length){
        console.log("********************last page!******************");
        this.GetPartOrder();
      }
      return resultData.splice(startIndex, this._paginator.pageSize);
    
    });

  
  }

  disconnect() {}

  //刷新的数据，清空原来的数据
  refresh(newDatas:OrderInfoConf[]){
    this._exampleDatabase.dataChange.next([]);
    let data = [];
    for(let newData of newDatas)
      data.push(this._exampleDatabase.getOrder(newData));
    this._exampleDatabase.dataChange.next(data);
  }

  //清空数据
  clean(){
    this._exampleDatabase.dataChange.next([]);
  }
  //合并入新的若干项数据
  merge(newDatas:OrderConf){
    let datas = this._exampleDatabase.data.slice();
    for(let newData of newDatas.parm)
      datas.push(this._exampleDatabase.getOrder(newData));
    this._exampleDatabase.dataChange.next(datas);
  }

  // 通过http获取数据
  GetPartOrder(){
    console.log("********* get part order *******");
    console.log(this.http.row_id[this.status]);
    if(this.http.row_id[this.status]>0){
      console.log("***** row_id > 0*****");
      this.http.GetPartOrder(this.status).then(
        res=>{
          this.merge(res);
          console.log("***** http res *****",res);
        },
        err=>{
          console.error("***** http err *****",err);
        }
      );
    }
    

  }
}

