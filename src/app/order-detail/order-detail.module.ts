import { OrderDetailComponent } from './components/order-detail.component';

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { OrderDetailRoutingModule } from './order-detail-routing.module';

// import {CarouselDirective} from "nativescript-ng2-carousel/nativescript-ng2-carousel";


@NgModule({
    bootstrap: [
            OrderDetailComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        OrderDetailRoutingModule

    ],
    declarations: [
OrderDetailComponent ,   ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class OrderDetailModule { }
