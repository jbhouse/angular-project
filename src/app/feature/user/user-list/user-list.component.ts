import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';
import {SystemService} from '../../../service/system.service';
import {User} from '../../../model/user';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-user-list',
  templateUrl: './../../../list.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent extends dbClass implements OnInit {

  objName = 'user'
	title: string = 'User List';
	selectedSortKey: string = 'Id';
	sortDesc: string = 'asc';
	sortKeys: string[] = User.sortableKeys;
	objs: User[];
  user: User;
  nonAcceptedAttributes = ['Id', 'DateCreated', 'DateUpdated', 'UpdatedByUser'];

  constructor(private UserSvc: UserService,
  			      private SysSvc: SystemService
  			  ) { super() }

  ngOnInit() {
  	this.UserSvc.list()
  		.subscribe(objs => {
  			this.objs = objs;
        this.user = new User();
        this.populateAttributeArray(this.user);
        this.selectSpecificAttributes(this.nonAcceptedAttributes);
        this.populateAttributeTypeHash(this.user);
  		});
  }

}
