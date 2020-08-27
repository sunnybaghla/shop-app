import { ProfileRoutingModule } from './profile-rouitng.module';
import { ProfileComponent } from './components/profile.component';

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";



@NgModule({
    bootstrap: [
            ProfileComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        ProfileRoutingModule

    ],
    declarations: [
ProfileComponent    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class ProfileModule { }
