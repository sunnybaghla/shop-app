import { ConfirmOtpRoutingModule } from './confirm-otp-routing.module';
import { ConfirmOtpComponent } from './components/confirm-otp.component';
import { ChangePasswordRoutingModule } from './../change-password/change-password-routing.module';
import { ChangePasswordComponent } from './../change-password/components/change-password.component';

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";



@NgModule({
    bootstrap: [
            ConfirmOtpComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
ConfirmOtpRoutingModule
    ],
    declarations: [
ConfirmOtpComponent    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class ConfirmOtpModule { }
