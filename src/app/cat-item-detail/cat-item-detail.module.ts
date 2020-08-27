import { CatItemDetailRoutingModule } from './cat-item-detail-routing.module';


import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { CatItemDetailComponent } from './components/cat-item-detail.component';




@NgModule({
    bootstrap: [
            CatItemDetailComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        CatItemDetailRoutingModule



    ],
    declarations: [
CatItemDetailComponent    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class CatItemDetailModule { }
