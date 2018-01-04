import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
// user components
import {UserEditComponent} from './feature/user/user-edit/user-edit.component';
import {UserListComponent} from './feature/user/user-list/user-list.component';
import {UserDetailComponent} from './feature/user/user-detail/user-detail.component';
import {UserCreateComponent} from './feature/user/user-create/user-create.component';
import {UserLoginComponent} from './feature/user/user-login/user-login.component';
// vendor components
import {VendorEditComponent} from './feature/vendor/vendor-edit/vendor-edit.component';
import {VendorListComponent} from './feature/vendor/vendor-list/vendor-list.component';
import {VendorDetailComponent} from './feature/vendor/vendor-detail/vendor-detail.component';
import {VendorCreateComponent} from './feature/vendor/vendor-create/vendor-create.component';

const routes: Routes = [
	{path: '', redirectTo: '/', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'user/detail/:id', component: UserDetailComponent},
	{path: 'user/edit/:id', component: UserEditComponent},
	{path: 'user/list', component: UserListComponent},
  {path: 'user/login', component: UserLoginComponent},
  {path: 'user/create', component: UserCreateComponent},
  {path: 'vendor/detail/:id', component: VendorDetailComponent},
  {path: 'vendor/edit/:id', component: VendorEditComponent},
  {path: 'vendor/list', component: VendorListComponent},
  {path: 'vendor/create', component: VendorCreateComponent},
	{path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }