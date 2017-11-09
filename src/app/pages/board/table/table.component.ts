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

import {OrderConf,OrderInfoConf} from "./../../../conf/order.conf";

import {HttpGetOrder} from "./../../../public.server/http.getOrder.server";

@Component({
  selector: 'order-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
  
})

export class TableComponent implements OnInit {

  
  // @Input()
  // set orderData(orderData:OrderConf){
  //   this._orderData = orderData;
  //   console.log('set:'+orderData);
  // }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('filter') filter: ElementRef;

  @Input() Status:string;
  @Input() OrderData:OrderConf;
  
  displayedColumns = ['order_id', 'price','status'];
  exampleDatabase : ExampleDatabase;
  dataSource: ExampleDataSource | null;


  constructor(private route:Router,private http:HttpGetOrder){
    console.log('*************tabl construct*********');
    
  }
  
  ngOnChanges(changes: SimpleChanges){
    console.log('****************data changed!*****************')
    console.log(changes);
    this.OrderData =  changes['OrderData'].currentValue;
    console.log('****************order data*****************')
    console.log(this.OrderData);

    if(this.OrderData != undefined){
      // this.exampleDatabase.orderData = this.OrderData;
      // this.dataSource._exampleDatabase = this.exampleDatabase;
      this.exampleDatabase = new ExampleDatabase(this.OrderData);
      this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
      Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
    }
    

  }
  ngOnInit() {
    // this.exampleDatabase = new ExampleDatabase(this.OrderData);
    // this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
    
    
  }

  Onclick(row){
    console.log('***************click row:******************')
    console.log(row);
    this.route.navigate(["/board/detail",row.order_id]);
  }

  test(){
    this.exampleDatabase.addUser({
          row_id: 185,
          order_id: "360093731321282560",
          customer_id: "de14cd03-2f57-4efd-a14b-8e2cebb7a890",
          price: 0.06,
          status: "CANCELED",
          description: null
    });
    this.exampleDatabase.orderData.parm.push( {
      row_id: 185,
      order_id: "360093731321282560",
      customer_id: "de14cd03-2f57-4efd-a14b-8e2cebb7a890",
      price: 0.06,
      status: "CANCELED",
      description: null
    });
    this.dataSource._exampleDatabase = this.exampleDatabase;
    console.log('**********************test*************************');
    console.log(this.exampleDatabase);
    console.log(this.dataSource);
    this.dataSource.connect();
    
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

    
    
    console.log('base-cons:'+orderData);

  }

  /** Adds a new user to the database. */
  addUser(orderInfos:OrderInfoConf) {
    const copiedData = this.data.slice();
    copiedData.push((this.getOrder(orderInfos)));
    this.dataChange.next(copiedData);
  }

  /** Builds and returns a new User. */
  private getOrder(orderInfo:OrderInfoConf) {


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

  constructor(public _exampleDatabase: ExampleDatabase, public _paginator: MatPaginator) {
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

      var resultData = data.filter((item: UserData) => {
        let searchStr = (item.order_id).toLowerCase();           //查找的内容
        if(this.filter==''){
          return true;
        }
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;
      });
      this._paginator.length = resultData.length;
      var startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      if(startIndex > resultData.length){
        startIndex = 0;
      }
      return resultData.splice(startIndex, this._paginator.pageSize);
    
    });

  
  }

  disconnect() {}
}

