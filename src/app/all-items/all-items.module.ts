import { AllItemsRoutingModule } from './all-items-routing.module';
import { AllItemsComponent } from './components/all-items.component';

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";




@NgModule({
    bootstrap: [
            AllItemsComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        AllItemsRoutingModule,
        NativeScriptUIListViewModule

    ],
    declarations: [
AllItemsComponent    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AllItemsModule { }
