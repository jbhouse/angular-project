import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from '../../../service/user.service';
import {User} from '../../../model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

	title: string = 'User detail';
	id: string;
	resp: any;
	user: User;
	myUser: User;

	remove() {
		this.UserSvc.delete(this.user.Id)
			.subscribe(resp => {
				this.resp = resp;
				console.log('user-detail remove', this.resp);
				this.router.navigate(['/user/list']);
			})
	}

  constructor(private UserSvc: UserService,
  			  private router: Router,
  			  private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(params => this.id = params['id']);
  	this.UserSvc.get(this.id)
  		.subscribe(users => { 
  			this.user = users.length > 0 ? users[0] : null;
  			console.log(Object.keys(this.user));
  		});
  }

}
