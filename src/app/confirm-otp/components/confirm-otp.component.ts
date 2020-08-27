import { FeedbackType } from 'nativescript-feedback';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { TextField } from 'tns-core-modules/ui/text-field';
import { NavigationExtras} from "@angular/router";
import { Feedback } from 'nativescript-feedback';


@Component({
  selector: 'ns-confirm-otp',
  templateUrl: './confirm-otp.component.html',
  styleUrls: ['./confirm-otp.component.css']
})
export class ConfirmOtpComponent implements OnInit {
    private feedback:Feedback;


    @ViewChild("textfield1", { static: false }) textfield1: ElementRef;
    @ViewChild("textfield2", { static: false }) textfield2: ElementRef;
    @ViewChild("textfield3", { static: false }) textfield3: ElementRef;
    @ViewChild("textfield4", { static: false }) textfield4: ElementRef;
    mobno: string;
    otp1txt: string;
    otp2txt: string;
    otp3txt: string;
    otp4txt: string;
    otp: string;
    textField1: TextField;
    textField2: TextField;
    textField3: TextField;
    textField4: TextField;
    backIcon: string;
    headingLabel: string;
    title: string;
    expirytime: string;
    resendOtp: string;
    editPhone: string;

    constructor(private routerExtension: RouterExtensions, private route: ActivatedRoute, private page: Page) {
      this.page.actionBarHidden = true;
      this.feedback=new Feedback();
    }

    ngOnInit(): void {
      this.otp1txt = "";
      this.otp2txt = "";
      this.otp3txt = "";
      this.otp4txt = "";
      this.backIcon = "res://back_white";
      this.headingLabel = "Verify Mobile";
      this.title = "An OTP has been sent to Your";
      this.mobno = "+91 9876543210";
      this.expirytime = "00:42";
      this.otp = "";
      this.resendOtp = "Didn't get the OTP?";
      this.editPhone = "Edit phone number?";
      this.route.queryParams.subscribe(params => {
        if (params["mobno"] != undefined) {
          this.mobno = params["mobno"];
        }
      })
    }


    ngAfterViewInit() {
      setTimeout(() => {
        this.textfield1.nativeElement.focus();
      }, 50);
    }

    public onEditPhone() {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "mobno": this.mobno
        }
      };
      this.routerExtension.navigate(["/login"], navigationExtras);
    }

    public onVerify() {
      this.otp = this.otp1txt + this.otp2txt + this.otp4txt + this.otp3txt;
      if (this.otp.length == 4) {
        this.routerExtension.navigate(['/newpass']);
      }
      else {
        this.feedback.show({type:FeedbackType.Error,title:"Inorrect OTP",message:"Please Enter Correct OTP"});
      }
    }


    public onFocus1(args) {
      var textField = <TextField>args.object;
      this.otp1txt = textField.text;
      if (this.otp1txt.length == 0) {
        this.textfield1.nativeElement.focus();
      }
      else {
        this.textfield2.nativeElement.focus();
      }
    }

    public onFocus2(args) {
      var textField = <TextField>args.object;
      this.otp2txt = textField.text;
      if (this.otp2txt.length == 0) {
        this.textfield1.nativeElement.focus();
      }
      else {
        this.textfield3.nativeElement.focus();
      }

    }
    public onFocus3(args) {
      var textField = <TextField>args.object;
      this.otp3txt = textField.text;
      if (this.otp3txt.length == 0) {
        this.textfield2.nativeElement.focus();
      }
      else {
        this.textfield4.nativeElement.focus();
      }

    }
    public onFocus4(args) {
      var textField = <TextField>args.object;
      this.otp4txt = textField.text;
      if (this.otp4txt.length == 0) {
        this.textfield3.nativeElement.focus();
      }
    }

}
