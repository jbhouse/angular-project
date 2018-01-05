import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PurchaserequestService} from '../../../service/purchaserequest.service';
import {UserService} from '../../../service/user.service';
// import {StatusService} from '../../../service/status.service';
import {User} from '../../../model/user';
import {PurchaseRequest} from '../../../model/purchaserequest';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-purchaserequest-edit',
  templateUrl: './purchaserequest-edit.component.html',
  styleUrls: ['./purchaserequest-edit.component.css']
})
export class PurchaserequestEditComponent extends dbClass implements OnInit {

  title: string = 'purchaserequest edit';
  id: string;
  resp: any;
  purchaserequest: PurchaseRequest;
  users: User[];
  nonAcceptedAttributes = ['Id', 'DateCreated', 'DateUpdated', 'UpdatedByUser'];

  update(){
    this.PrSvc.update(this.purchaserequest)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/product/list']);
      });
  }

  constructor(private PrSvc: PurchaserequestService,
              private UserSvc: UserService,
              private router: Router,
              private route: ActivatedRoute) { super() }

  ngOnInit() {
    this.UserSvc.list()
      .subscribe(users => this.users = users);

    this.route.params.subscribe(params => this.id = params['id']);
    this.PrSvc.get(this.id)
      .subscribe(prs => {
        this.purchaserequest = prs.length > 0 ? prs[0] : null;
        this.populateAttributeArray(this.purchaserequest);
        this.selectSpecificAttributes(this.nonAcceptedAttributes);
        this.populateAttributeTypeHash(this.purchaserequest);
      });
  }

}
