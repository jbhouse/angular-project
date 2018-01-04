import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from '../../../service/user.service';
import {User} from '../../../model/user';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent extends dbClass implements OnInit {

  title: string = 'user create';
  id: string;
  resp: any;
  user: User;
  nonAcceptedAttributes = ['Id', 'DateCreated', 'DateUpdated', 'UpdatedByUser'];

  create(){
    this.UserSvc.create(this.user)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/user/list']);
      });
  }

  constructor(private UserSvc: UserService,
              private router: Router,
              private route: ActivatedRoute) { super() }

  ngOnInit() {
    this.user = new User();
    this.populateAttributeArray(this.user);
    this.selectSpecificAttributes(this.nonAcceptedAttributes);
    this.populateAttributeTypeHash(this.user);
  }

}
