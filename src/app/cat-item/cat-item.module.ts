import { CatItemRoutingModule } from './cat-item-routing.module';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { CatItemComponent } from "./components/cat-item.component";




@NgModule({
    bootstrap: [
            CatItemComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        CatItemRoutingModule,
        NativeScriptUIListViewModule

    ],
    declarations: [
CatItemComponent    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class CatItemModule { }
