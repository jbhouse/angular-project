import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
// user components
import {UserListComponent} from './feature/user/user-list/user-list.component';
import {UserDetailComponent} from './feature/user/user-detail/user-detail.component'; 
// 
const routes: Routes = [
	{path: '', redirectTo: '/', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'user/detail/:id', component: UserDetailComponent},
	{path: 'user/list', component: UserListComponent},
	{path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }