import { CatItemUploadRoutingModule } from './cat-item-upload-routing.module';
import { CatItemUploadComponent } from './components/cat-item-upload.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";




@NgModule({
    bootstrap: [
            CatItemUploadComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        CatItemUploadRoutingModule,
        NativeScriptUIListViewModule

    ],
    declarations: [
CatItemUploadComponent    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class CatItemUploadModule { }
