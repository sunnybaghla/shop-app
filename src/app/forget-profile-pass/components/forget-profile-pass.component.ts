import { FeedbackType } from 'nativescript-feedback';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Feedback } from 'nativescript-feedback';

@Component({
  selector: 'ns-forget-profile-pass',
  templateUrl: './forget-profile-pass.component.html',
  styleUrls: ['./forget-profile-pass.component.css']
})
export class ForgetProfilePassComponent implements OnInit {

    @ViewChild("new",{static:false}) "new":ElementRef;
    @ViewChild("retype",{static:false}) "retype":ElementRef;
    pass:string;

    private feedback:Feedback;

  constructor() {
      this.feedback=new Feedback();
      this.pass="ASd@12344";
  }
  onSave()
  {

      if(this.new.nativeElement.text==""||this.retype.nativeElement.text=="")
          {  alert("Please Enter All the Fields");
          return;

  }

        if(this.new.nativeElement.text!==this.retype.nativeElement.text)
        {
            this.feedback.show({type:FeedbackType.Error,title:"All Field Reuired",message:"Please Enter All the Field"});
            return
        }
        if(this.new.nativeElement.text==this.retype.nativeElement.text)
        {   if(this.new.nativeElement.text.length<10)
            {
                this.feedback.show({type:FeedbackType.Error,title:"All Field Reuired",message:"Please Enter All the Field"});

            }
            else{

        this.pass=this.new.nativeElement.text;
        alert("Password SucessFully Changed")
            }
        }

  }

  ngOnInit() {
  }

}
