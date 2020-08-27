import { ForgetProfilePassComponent } from './components/forget-profile-pass.component';

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ForgetProfilePassRoutingModule } from './forget-profile-pass-routing.module';



@NgModule({
    bootstrap: [
            ForgetProfilePassComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        ForgetProfilePassRoutingModule

    ],
    declarations: [
ForgetProfilePassComponent    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class ForgetProfilePassModule { }
