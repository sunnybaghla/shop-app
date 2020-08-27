import { Feedback, FeedbackType } from 'nativescript-feedback';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
// import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";

@Component({
  selector: 'ns-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

    @ViewChild("old",{static:false}) "old":ElementRef;
    @ViewChild("new",{static:false}) "new":ElementRef;
    @ViewChild("retype",{static:false}) "retype":ElementRef;
    pass:string;
    private feedback:Feedback;

  constructor(private routerextensions:RouterExtensions,private route:ActivatedRoute,private Page:Page) {
      this.pass="ASd@12344";
    this.feedback=new Feedback();
  }
  onSave()
  {

      if(this.old.nativeElement.text==null ||this.new.nativeElement.text==""||this.retype.nativeElement.text=="")
          {
              this.feedback.show({type:FeedbackType.Error,title:"Missing Fields",message:"Please Enter All the Fields"});
          return;

  }
        if(this.old.nativeElement.text!==this.pass)
        {
            this.feedback.show({type:FeedbackType.Error,title:"Password Incorrect",message:"Please Enter Old Password Correct"});

            return;
        }
        if(this.new.nativeElement.text!==this.retype.nativeElement.text)
        {
            this.feedback.show({type:FeedbackType.Error,title:"New Password",message:"New Password Not Match"});

            return
        }
        else
        this.pass=this.new.nativeElement.text;

  }
  forPass()
  {
        this.routerextensions.navigate(['./confirm-otp']);
  }
  ngOnInit() {
      this.Page.actionBarHidden=true;
  }
}
