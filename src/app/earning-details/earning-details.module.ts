import { EarningDetailsComponent } from './components/earning-details.component';

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { EarningDetailsRoutingModule } from './earning-details-routing.module';



@NgModule({
    bootstrap: [
            EarningDetailsComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        EarningDetailsRoutingModule

    ],
    declarations: [
EarningDetailsComponent    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class EarningDetailsModule { }
