import { ContactUsComponent } from './components/contact-us.component';

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ContactUsRoutingModule } from './contact-us-routing.module';



@NgModule({
    bootstrap: [
            ContactUsComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        ContactUsRoutingModule

    ],
    declarations: [
ContactUsComponent    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class ContactUsModule { }
