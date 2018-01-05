import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PurchaserequestService} from '../../../service/purchaserequest.service';
// import {UserService} from '../../../service/user.service';
import {PurchaseRequest} from '../../../model/purchaserequest';
// import {User} from '../../../model/user';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaserequestCreateComponent extends dbClass implements OnInit {


  title: string = 'purchaserequest create';
  id: string;
  resp: any;
  purchaserequest: PurchaseRequest;
  // users: User[];
  nonAcceptedAttributes = ['Id', 'Status', 'User', 'DateCreated', 'DateUpdated', 'UpdatedByUser'];

  create(){
    this.PrSvc.create(this.purchaserequest)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/purchaserequest/list']);
      });
  }

  constructor(private PrSvc: PurchaserequestService,
              // private UserSvc: UserService,
              private router: Router,
              private route: ActivatedRoute) { super() }

  ngOnInit() {
    this.purchaserequest = new PurchaseRequest();
    this.populateAttributeArray(this.purchaserequest);
    this.selectSpecificAttributes(this.nonAcceptedAttributes);
    this.populateAttributeTypeHash(this.purchaserequest);
  }


}
