import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import * as statusBar from 'nativescript-status-bar'


@Component({
  selector: 'ns-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
    itemIcon:string;
    caroActive: boolean;
    ordermainDetail:{orderNo: number, timeSlot: string, items: number, totalRup: number, senderMeassge: string, }[]=[];
    orderItemDetails:{img:string,itemName:string,qty:number,earning:number,itemCode:number,data:{title:string,subTitle:string}[]}[]=[];
    images:{srcImage: string}[]=[];
  constructor(private page:Page) {
      this.images.push({srcImage:'https://5.imimg.com/data5/NI/IH/QU/ANDROID-90366522/img-20190619-153251-jpg-500x500.jpg'},{srcImage:'https://static.archiesonline.com/public/images/product/large/Birthday_Cake_2_Kg_Chocolate_PRCAKE140_b5e58052.jpg'},{srcImage:'https://natashaskitchen.com/wp-content/uploads/2015/06/Black-Forest-Cake-5-500x500.jpg'});
    this.caroActive=false;
    this.ordermainDetail.push({orderNo:22222, timeSlot:'8:00 - 9:00' ,items:6, totalRup: 235, senderMeassge:'asdasfaf' });

      this.itemIcon="https://www.bakedbyanintrovert.com/wp-content/uploads/2016/04/Triple-Chocolate-Mousse-Cake_1200-1-720x540.jpg";

        this.orderItemDetails.push(
            {
                 img:"asg",
                 itemName:"Flavoured Cake",
                 qty:1,
                 earning:234,
                 itemCode:23455,
                 data:[{title:"Weight",subTitle:"500 Gm"},{title:"Type",subTitle:"Egg Less"},{title:"Flavoured",subTitle:"Butter Scotch"},{title:"Name on Cake",subTitle:"Sunny"}]
            },
            {
                img:"asg",
                itemName:"Chocolate",
                qty:1,
                earning:234,
                itemCode:23455,
                data:[{title:"Flavoured",subTitle:"Safnkaf"}]
           }
        );

  }

  ngOnInit() {
      this.page.actionBarHidden=true;
      statusBar.hide;

  }
  OnProcess()
  {
    // for(let i=0;i<this.orderItemDetails.length;i++)
    // {
    //     if(this.orderItemDetails)
    // }
  }
  activeCaro()
  {
    this.caroActive=!this.caroActive;
  }
  chkHeight(i)
  {
      let y=this.orderItemDetails[i].data.length;
      return y *46;
  }

}
