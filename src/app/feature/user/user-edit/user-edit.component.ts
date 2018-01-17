import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from '../../../service/user.service';
import {User} from '../../../model/user';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-user-edit',
  templateUrl: './../../../manipulate1.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent extends dbClass implements OnInit {

	title: string = 'user edit';
  routerlink:string = '/user/list';
  action:string='edit';
	id: string;
	resp: any;
  objname: string = 'user';
	obj: User;
  nonAcceptedAttributes = ['Id', 'DateCreated', 'DateUpdated', 'UpdatedByUser'];

	change(){
		this.UserSvc.update(this.obj)
			.subscribe(resp => {
				this.resp = resp;
				this.router.navigate(['/user/list']);
			});
	}

  constructor(private UserSvc: UserService,
  		    	  private router: Router,
  			      private route: ActivatedRoute) { super() }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.UserSvc.get(this.id)
      .subscribe(objs => {
        this.obj = objs.length > 0 ? objs[0] : null;
        this.populateAttributeArray(this.obj);
        this.selectSpecificAttributes(this.nonAcceptedAttributes);
        this.populateAttributeTypeHash(this.obj);
      });
  }
}
