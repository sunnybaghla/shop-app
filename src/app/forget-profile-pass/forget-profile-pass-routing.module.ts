import { ForgetProfilePassComponent } from './components/forget-profile-pass.component';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    { path: "", component: ForgetProfilePassComponent},
];
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from '@nstudio/nativescript-cardview';
registerElement('CardView', () => CardView);

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})


export class ForgetProfilePassRoutingModule { }
