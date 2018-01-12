import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {User} from '../../../model/user';
import {UserService} from '../../../service/user.service';
import {SystemService} from '../../../service/system.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

	message:string = '';
  user : User = new User();

  login() {
    this.UserSvc.authenticate(this.user.UserName, this.user.Password)
      .subscribe(users => {
        if(users.length > 0) {
          this.user = users[0];
          this.SysSvc.data.user.instance = this.user;
          this.SysSvc.data.user.loggedIn = true;
          // console.log(this.SysSvc.data.user.instance)
          console.log("SysSvc:", this.SysSvc.debug);
          this.SysSvc.data.displayMenu = true;
          this.router.navigateByUrl('/user/list');
        } else {
          this.message = "Invalid Username/Password combination. Retry."
        }
        console.log("Authenticate:Users:", users);
      });
  }

  constructor(private UserSvc : UserService,
          private SysSvc : SystemService,
          private router : Router) { }

  ngOnInit() {
    }
}
