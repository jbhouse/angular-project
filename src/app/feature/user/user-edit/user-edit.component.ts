import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from '../../../service/user.service';
import {User} from '../../../model/user';
import {dbClass} from ''

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

	title: string = 'user edit';
	id: string;
	resp: any;
	user: User;
  objKeys: any[];
  attributeTypeHash: {};
  nonAcceptedAttributes = ['Id', 'DateCreated', 'DateUpdated', 'UpdatedByUser'];

	update(){
		this.UserSvc.update(this.user)
			.subscribe(resp => {
				this.resp = resp;
				this.router.navigate(['/user/list']);
			});
	}

  constructor(private UserSvc: UserService,
  			  private router: Router,
  			  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.UserSvc.get(this.id)
      .subscribe(users => {
        this.user = users.length > 0 ? users[0] : null;
        this.objKeys = Object.keys(this.user);
        for (var i = 0; i < this.objKeys.length; ++i) {
          if (this.nonAcceptedAttributes.includes(this.objKeys[i])) {
            this.objKeys.splice(i,1);
            i--;
          }
        }
        this.attributeTypeHash = {};
        for(let k of this.objKeys) {
          this.attributeTypeHash[k] = typeof(this.user[k]);
        }
      });
  }

}
