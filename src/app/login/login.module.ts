
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./components/login.component";



@NgModule({
    bootstrap: [
            LoginComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        LoginRoutingModule

    ],
    declarations: [
LoginComponent    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class LoginModule { }
