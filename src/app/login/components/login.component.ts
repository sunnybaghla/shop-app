import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    @ViewChild("userTxt",{static:false}) "userTxt":ElementRef;
    @ViewChild("passTxt",{static:false}) "passTxt":ElementRef;
    userName:string;
    userPass:string;
    hello:string;
    userNameIcon:String;
    PasswordIcon:String;
    private feedback:Feedback;
    chkSecure:boolean;


  constructor(private routerextension:RouterExtensions,private route:ActivatedRoute,private page:Page) {
      this.userName="Sunny";
      this.userPass="123456"
      this.hello="asdaf"
      this.userNameIcon="https://cdn3.vectorstock.com/i/1000x1000/60/82/user-icon-white-silhouette-on-blue-round-vector-20326082.jpg";
      this.PasswordIcon="https://cdn5.vectorstock.com/i/1000x1000/95/29/white-password-protection-icon-on-blue-background-vector-20969529.jpg";
        this.feedback=new Feedback();
        this.chkSecure=true;
   }
   forgetpass()
   {
    this.routerextension.navigate(['/login-forget']);
   }
  onSign()
  {
        if(this.userTxt.nativeElement.text!=this.userName )
        {

         this.feedback.show({message:"Please Enter the Correct User Name ", type: FeedbackType.Error,title:"Incoreect User Name"
             });
            // alert("Please Enter Corrcet User Name");
             return;
        }
        if(this.passTxt.nativeElement.text!=this.userPass )
        {
            this.feedback.show({message:"Please Enter the Correct Password ", type: FeedbackType.Error,title:"Incoreect Password"
        });
        this.chkSecure=false;
            return;
        }

  }

  ngOnInit() {
      this.page.actionBarHidden=true;
  }

}
