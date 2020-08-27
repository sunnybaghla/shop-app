import { Component, OnInit } from '@angular/core';
import { Nfc, NfcTagData, NfcNdefData } from "nativescript-nfc";
import { Page, View } from 'tns-core-modules/ui/page/page';
import * as statusBar from 'nativescript-status-bar';
import { Popup } from 'nativescript-popup';
import { ItemEventData } from 'tns-core-modules/ui/list-view';
// import { Popup } from 'nativescript-popup';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { Button } from 'tns-core-modules/ui/button';
import { Label } from 'tns-core-modules/ui/label';
import { ScrollView } from 'tns-core-modules/ui/scroll-view';
import * as builder from 'tns-core-modules/ui/builder';

// import statusBar = require("nativescript-status-bar");
// import * as app from "tns-core-modules/application";





@Component({
  selector: 'ns-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
    private nfc:Nfc;
    private popup: Popup;



  constructor(private page:Page) {

      this.nfc=new Nfc();

   }
   _showPopup(source, view) {
    this.popup = new Popup({
      height: 30,
      width: 80,
      unit: '%',
      elevation: 10,
      borderRadius: 25
    });
    this.popup.showPopup(source, view).then(data => {
      console.log(data);
    });
  }
  showPopup() {
    const stack: any = new StackLayout();
    stack.height = '100%';
    const lbl: any = new Label();
    lbl.text = 'Osei';
    lbl.backgroundColor = 'red';
    lbl.marginTop = 5;
    lbl.height = 40;
    stack.addChild(lbl);
    const lblOther: any = new Label();
    lblOther.text = 'Fortune';
    lblOther.backgroundColor = 'blue';
    lblOther.height = 40;
    stack.addChild(lblOther);
    const btn: any = new Button();
    btn.text = 'Push';
    btn.height = 40;
    stack.addChild(btn);
    const dismissBtn = new Button();
    dismissBtn.text = 'Hide';
    dismissBtn.on('tap', args => {

    });
    stack.addChild(dismissBtn);
    const sv = new ScrollView();
    sv.content = stack;
    this._showPopup(this.page.getViewById('btn'), this);
  }
   nfcc()
   {

    // this.nfc.available().then((avail) => {
    //     console.log(avail ? "Yes" : "No");
    // });
    // this.nfc.enabled().then((on) => {
    //     console.log(on ? "Yes" : "No");
    // });
   }

  ngOnInit() {
      this.page.actionBarHidden=true;
      statusBar.hide();


  }

}
