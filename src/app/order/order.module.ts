import { OrderComponent } from './components/order.component';

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { OrderRoutingModule } from './order-rouitng.module';



@NgModule({
    bootstrap: [
            OrderComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        OrderRoutingModule

    ],
    declarations: [
OrderComponent    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class OrderModule { }
