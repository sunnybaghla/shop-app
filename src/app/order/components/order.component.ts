import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import * as statusBar from 'nativescript-status-bar';


@Component({
  selector: 'ns-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    selectedIndex:number;
    orderList:{orderNo:number,status:number,assignTime:string,item:number,earnings:number,deliverTime:string}[]=[];


  constructor(private page:Page) {
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
      statusBar.hide();
  }

}
