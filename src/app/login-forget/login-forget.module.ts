import { LoginForgetComponent } from './components/login-forget.component';

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { LoginForgetRoutingModule } from './login-forget-routing.module';



@NgModule({
    bootstrap: [
            LoginForgetComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        LoginForgetRoutingModule

    ],
    declarations: [
LoginForgetComponent    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class LoginForgetModule { }
