import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-cat-item',
  templateUrl: './cat-item.component.html',
  styleUrls: ['./cat-item.component.css']
})
export class CatItemComponent implements OnInit {

    itemImg:string;
    selctedUpperGrid:number;
    selectedIndex:number;
    code:number;
    itemData:{type:number,data:{status:boolean,img:string,name:string,orderNo:number,price:number,title:{}}[]}[]=[];
    actItem:number;
    inAct:number;

  constructor(private page:Page) {
      this.selectedIndex=0;
      this.actItem=248;
      this.inAct=336;
      this.itemData.push(
          {
              type:11303,
              data:[{status:true,img:"https://www.insity.com/images/thumbs/001/0010692_black-forest-cake_510.jpeg",name:"Veg",orderNo:2345,price:235,title:["Veg","Strawbery"]}]

          },
          {
            type:123,
            data:[{status:true,img:"https://www.insity.com/images/thumbs/001/0010692_black-forest-cake_510.jpeg",name:"Strawbery",orderNo:2345,price:235,title:["Veg","Strawbery"]}]

        },
        {
            type:313,
            data:[{status:true,img:"https://www.insity.com/images/thumbs/001/0010692_black-forest-cake_510.jpeg",name:"Round",orderNo:2345,price:235,title:["Veg","Strawbery"]}]

        }
      );
      this.code=this.itemData[0].type;
      this.selctedUpperGrid=0;
      this.itemImg="https://www.insity.com/images/thumbs/001/0010692_black-forest-cake_510.jpeg";
   }
   selectUpperIndex(i)
   {
       this.selctedUpperGrid=i;
   }
   getItem(item)
   {
       if(item ==11303)
       {
           return "Veg";
       }
       if(item ==123)
       {
           return "Round";
       }
       if(item ==313)
       {
           return "Other";
       }
   }
   itemTap(i,typ)
   {
       this.code=typ;
       this.selectedIndex=i
   }
   OnimgTap(i)
   {

   }

  ngOnInit() {
      this.page.actionBarHidden=true;

  }

}
