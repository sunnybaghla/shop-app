import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";




const route:Routes=[
        {path:"",redirectTo:"/login",pathMatch:"full"},
        { path: "all-items", loadChildren: "./all-items/all-items.module#AllItemsModule" },
        { path: "cat-item", loadChildren: "./cat-item/cat-item.module#CatItemModule" },
        { path: "cat-item-detail", loadChildren: "./cat-item-detail/cat-item-detail.module#CatItemDetailModule" },
        { path: "cat-item-upload", loadChildren: "./cat-item-upload/cat-item-upload.module#CatItemUploadModule" },
        { path: "cats", loadChildren: "./cats/cats.module#CatsModule" },

        { path: "change-password", loadChildren: "./change-password/change-password.module#ChangePasswordModule" },
        { path: "confirm-otp", loadChildren: "./confirm-otp/confirm-otp.module#ConfirmOtpModule" },
        { path: "contact-us", loadChildren: "./contact-us/contact-us.module#ContactUsModule" },
        { path: "dashboard", loadChildren: "./dashboard/dashboard.module#DashboardModule" },
        { path: "earning-details", loadChildren: "./earning-details/earning-details.module#EarningDetailsModule" },
        { path: "earnings", loadChildren: "./earnings/earnings.module#EarningsModule" },
        { path: "forget-profile-pass", loadChildren: "./forget-profile-pass/forget-profile-pass.module#ForgetProfilePassModule" },
        { path: "item-detail", loadChildren: "./item-detail/item-detail.module#ItemDetailModule" },
        { path: "login", loadChildren: "./login/login.module#LoginModule" },
        { path: "login-forget", loadChildren: "./login-forget/login-forget.module#LoginForgetModule" },
        { path: "order", loadChildren: "./order/order.module#OrderModule" },
        { path: "order-detail", loadChildren: "./order-detail/order-detail.module#OrderDetailModule" },
        { path: "profile", loadChildren: "./profile/profile.module#ProfileModule" },



];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(route)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
