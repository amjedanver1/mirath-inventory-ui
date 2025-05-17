import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppMenueComponent } from './app-menue/app-menue.component';
import { LogInComponent } from './log-in/log-in.component';
import { SupplierRegistrationComponent } from './supplier-registration/supplier-registration.component';
import { RepotsComponent } from './repots/repots.component';
import { StackWatcherComponent } from './stack-watcher/stack-watcher.component';
import { ItemMasterComponent } from './item-master/item-master.component';
import { TenentAndShopRegistrationComponent } from './tenent-and-shop-registration/tenent-and-shop-registration.component';
import { InventoryManagmentComponent } from './inventory-managment/inventory-managment.component';
import { ItemRetunComponent } from './item-retun/item-retun.component';
import { ItemRefillComponent } from './item-refill/item-refill.component';
import { SettingsComponent } from './settings/settings.component';
import { MasterDataRegistrationComponent } from './master-data-registration/master-data-registration.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ApprovalComponent } from './approval/approval.component';
import { StaffRegistrationComponent } from './staff-registration/staff-registration.component';
import { SecurityAndPermissionComponent } from './security-and-permission/security-and-permission.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppMenueComponent,
    LogInComponent,
    SupplierRegistrationComponent,
    RepotsComponent,
    StackWatcherComponent,
    ItemMasterComponent,
    TenentAndShopRegistrationComponent,
    InventoryManagmentComponent,
    ItemRetunComponent,
    ItemRefillComponent,
    SettingsComponent,
    MasterDataRegistrationComponent,
    ConfigurationComponent,
    ApprovalComponent,
    StaffRegistrationComponent,
    SecurityAndPermissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
