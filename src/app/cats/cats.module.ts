import { CatsRoutingModule } from './cats-routing.module';
import { CatsComponent } from './components/cats.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";




@NgModule({
    bootstrap: [
            CatsComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        CatsRoutingModule,
        NativeScriptUIListViewModule

    ],
    declarations: [
CatsComponent    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class CatsModule { }
