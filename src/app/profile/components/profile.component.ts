import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    name:string="";
    email:string="";
    mobile:number;
    adress:string;
    gstNo:string;
    gstMoreInfo:string;
    pinCode:{}[]=[];
    bankName:string;
    bankAcc:string;
    bankIFSC:string;
    flag:boolean=false;
    flag2:boolean=false;
    flag3:boolean=false;
    flag4:boolean=false;
    userImg:String;
    iconImg:String;


  constructor(private routerextensions:RouterExtensions,private route:ActivatedRoute,private page:Page) {
      this.name="Sunny Baghla";
      this.email="saasf@fsnf.com";
      this.mobile=9988234477;
      this.adress="Quter No 10 , Parveen Patwari Wala Quater Punjab Pin code 152116";
      this.gstNo="Asfasf";
      this.gstMoreInfo="asasfaa";
        this.pinCode.push([152116,152116,152469,256985,256887])
      this.bankName="HDFC Bank";
      this.bankAcc="aa559956666666";
      this.bankIFSC="HDFC003892";
      this.userImg="https://images-na.ssl-images-amazon.com/images/I/41dd%2Bg%2BIxvL.jpg";
      this.iconImg="https://cdn2.iconfinder.com/data/icons/e-commerce-blue-line/48/74_user-avatar-profile-personal-account-512.png";
   }
   onper()
   {
       this.flag=!this.flag;
       this.flag2=false
       this.flag3=false;
       this.flag4=false;

   }
   onper2()
   {
       this.flag2=!this.flag2;
       this.flag=false;
       this.flag3=false;
       this.flag4=false;
   }
   onper3()
   {
       this.flag3=!this.flag3;
       this.flag4=false;
       this.flag2=false;
       this.flag=false;
   }
   onper4()
   {
       this.flag4=!this.flag4;
       this.flag3=false;
       this.flag2=false;
       this.flag=false;
   }
   changePass()
   {
            this.routerextensions.navigate(['./change-password']);
   }

  ngOnInit() {
      this.page.actionBarHidden=true;
  }


}
