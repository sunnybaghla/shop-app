import { ItemDetailComponent } from './components/item-detail.component';

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ItemDetailRoutingModule } from './item-detail-routing.module';



@NgModule({
    bootstrap: [
            ItemDetailComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        ItemDetailRoutingModule

    ],
    declarations: [
ItemDetailComponent    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class ItemDetailModule { }
