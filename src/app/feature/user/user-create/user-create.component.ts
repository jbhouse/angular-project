import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from '../../../service/user.service';
import {User} from '../../../model/user';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-user-create',
  templateUrl: './../../../manipulate1.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent extends dbClass implements OnInit {

  title: string = 'user create';
  id: string;
  resp: any;
  obj: User;
  action:string='create';
  routerlink:string = '/user/list';
  nonAcceptedAttributes = ['Id', 'DateCreated', 'DateUpdated', 'UpdatedByUser'];

  change(){
    console.log(this.obj)
    this.UserSvc.create(this.obj)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/user/list']);
      });
  }

  constructor(private UserSvc: UserService,
              private router: Router,
              private route: ActivatedRoute) { super() }

  ngOnInit() {
    this.obj = new User();
    this.populateAttributeArray(this.obj);
    this.selectSpecificAttributes(this.nonAcceptedAttributes);
    this.populateAttributeTypeHash(this.obj);
  }

}
