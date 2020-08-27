import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard.component';

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";



@NgModule({
    bootstrap: [
            DashboardComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        DashboardRoutingModule

    ],
    declarations: [
DashboardComponent    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class DashboardModule { }
