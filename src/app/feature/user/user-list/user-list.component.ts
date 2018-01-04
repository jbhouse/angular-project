import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';
// import {SystemService} from '../../../service/user.service';
// import {LogService} from '../../../service/user.service';
import {User} from '../../../model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

	title: string = 'User List';
	selectedSortKey: string = 'Id';
	sortDesc: string = 'asc';
	sortKeys: string[] = User.sortableKeys;
	users: User[];

  constructor(private UserSvc: UserService
  			  // private SysSvc: SystemService,
  			  // private LogSvc: LogService
  			  ) { }

  ngOnInit() {
  	this.UserSvc.list()
  		.subscribe(users => {
  			this.users = users;
  		});
  }

}
