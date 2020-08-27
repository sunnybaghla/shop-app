import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    selectedIndex:number;
    orderList:{orderNo:number,status:number,assignTime:string,item:number,earnings:number,deliverTime:string}[]=[];

  constructor(private page:Page,private routerextension:RouterExtensions,private routes:ActivatedRoute) {
      this.orderList.push(
          {orderNo:12345678,status:1,assignTime:"22 May 2019",item:4,earnings:455,deliverTime:"9:30 Today"},
          {orderNo:12345678,status:0,assignTime:"22 May 2019",item:4,earnings:455,deliverTime:"9:30 Today"},
          {orderNo:12345678,status:2,assignTime:"22 May 2019",item:4,earnings:455,deliverTime:"9:30 Today"},
          {orderNo:12345678,status:0,assignTime:"22 May 2019",item:4,earnings:455,deliverTime:"9:30 Today"},

      );
      this.selectedIndex=0;
  }
  selctedIndex(i)
  {
      this.selectedIndex=i;
  }
  assign()
  {
      return "20 Min";
  }
  nxtTap(orderNumber)
  {

  }

  ngOnInit() {
      this.page.actionBarHidden=true;
  }

}
