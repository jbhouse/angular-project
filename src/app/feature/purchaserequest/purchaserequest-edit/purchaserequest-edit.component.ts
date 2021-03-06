import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {SystemService} from '../../../service/system.service';
import {PurchaserequestService} from '../../../service/purchaserequest.service';
import {StatusService} from '../../../service/status.service';

import {Status} from '../../../model/status';
import {PurchaseRequest} from '../../../model/purchaserequest';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-purchaserequest-edit',
  templateUrl: './../../../purchaserequest-manipulate.html',
  styleUrls: ['./purchaserequest-edit.component.css']
})

export class PurchaserequestEditComponent extends dbClass implements OnInit {

  action:string='update';
  title: string = 'purchaserequest edit';
  id: string;
  resp: any;
  objname:string = 'purchaserequest';
  obj: PurchaseRequest;
  parent1: Status[];

  nonAcceptedAttributes = ['Id', 'User', 'DateCreated', 'DateUpdated', 'UpdatedByUser', 'UpDatedByUser', 'Status'];

  change(){
    this.obj.UpdatedByUser = this.SysSvc.data.user.instance.Id;
    console.log(this.obj)
    this.PrSvc.update(this.obj)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/product/list']);
      });
  }

  constructor(private PrSvc: PurchaserequestService,
              private SysSvc: SystemService,
              private StatusSvc: StatusService,
              private router: Router,
              private route: ActivatedRoute) { super() }

  ngOnInit() {
    this.StatusSvc.list()
      .subscribe(parent1 => this.parent1 = parent1);
      console.log(this.parent1)

    this.route.params.subscribe(params => this.id = params['id']);
    this.PrSvc.get(this.id)
      .subscribe(prs => {
        this.obj = prs.length > 0 ? prs[0] : null;
        this.populateAttributeArray(this.obj);
        this.selectSpecificAttributes(this.nonAcceptedAttributes);
        this.populateAttributeTypeHash(this.obj);
      });
  }

}
