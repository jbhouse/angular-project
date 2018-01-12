import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import {MenuComponent} from './core/menu/menu.component';
import {HomeComponent} from './home/home.component';
import {AppComponent} from './app.component';

import {StatusService} from './service/status.service';
import {UserService} from './service/user.service';
import {VendorService} from './service/vendor.service';
import {SystemService} from './service/system.service';
import {ProductService} from './service/product.service';
import {PurchaserequestService} from './service/purchaserequest.service';
import {PurchaserequestlineitemService} from './service/purchaserequestlineitem.service';
// import {LogService} from './service/log.service';
import {SortPipe} from './util/sortpipe';

import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
//
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
//
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
//
import { PurchaserequestDetailComponent } from './feature/purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaserequestCreateComponent } from './feature/purchaserequest/purchaserequest-create/purchaserequest-create.component';
import { PurchaserequestEditComponent } from './feature/purchaserequest/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaserequestListComponent } from './feature/purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaserequestlineitemDetailComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-detail/purchaserequestlineitem-detail.component';
import { PurchaserequestlineitemListComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-list/purchaserequestlineitem-list.component';
import { PurchaserequestlineitemEditComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-edit/purchaserequestlineitem-edit.component';
import { PurchaserequestlineitemCreateComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-create/purchaserequestlineitem-create.component';


@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    MenuComponent,
    HomeComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDetailComponent,
    ProductListComponent,
    VendorListComponent,
    VendorEditComponent,
    VendorCreateComponent,
    VendorDetailComponent,
    UserLoginComponent,
    PurchaserequestDetailComponent,
    PurchaserequestCreateComponent,
    PurchaserequestEditComponent,
    PurchaserequestListComponent,
    PurchaserequestlineitemDetailComponent,
    PurchaserequestlineitemListComponent,
    PurchaserequestlineitemEditComponent,
    PurchaserequestlineitemCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    VendorService,
    SystemService,
    PurchaserequestService,
    PurchaserequestlineitemService,
    SortPipe,
    ProductService,
    StatusService
    // LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
