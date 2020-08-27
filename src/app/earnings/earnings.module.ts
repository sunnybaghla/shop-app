import { EarningsRoutingModule } from './earnings-routing.module';
import { EarningsComponent } from './components/earnings.component';

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";




@NgModule({
    bootstrap: [
            EarningsComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        EarningsRoutingModule
    ],
    declarations: [
EarningsComponent    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class EarningsModule { }
