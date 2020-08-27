import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './components/change-password.component';

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";



@NgModule({
    bootstrap: [
            ChangePasswordComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        ChangePasswordRoutingModule

    ],
    declarations: [
ChangePasswordComponent    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class ChangePasswordModule { }
