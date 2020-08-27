import { Feedback, FeedbackType } from 'nativescript-feedback';
import { RouterExtensions } from 'nativescript-angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-login-forget',
  templateUrl: './login-forget.component.html',
  styleUrls: ['./login-forget.component.css']
})
export class LoginForgetComponent implements OnInit {

    @ViewChild("userName",{static:false}) "userName":ElementRef;
    inputUser:string;
    private feedback:Feedback;


  constructor(private page:Page,private routerextensions:RouterExtensions) {
      this.feedback=new Feedback();
      this.inputUser="sdsf";

   }

  ngOnInit() {
      this.page.actionBarHidden=true;
  }
  OnNxtTap()
  {
      if(this.userName.nativeElement.text===this.inputUser)
      {
           // this.routerextensions.navigate(["./login-forget"]);
      }
      else
      this.feedback.show({message:"Please Enter Correct User Id",type:FeedbackType.Error,title:"Incorrect UserId"})
  }

}
