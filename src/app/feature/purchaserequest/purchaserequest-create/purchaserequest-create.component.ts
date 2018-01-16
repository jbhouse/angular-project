import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {SystemService} from '../../../service/system.service';
import {StatusService} from '../../../service/status.service';
import {PurchaserequestService} from '../../../service/purchaserequest.service';
import {PurchaseRequest} from '../../../model/purchaserequest';
import {Status} from '../../../model/status';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './../../../purchaserequest-manipulate.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaserequestCreateComponent extends dbClass implements OnInit {

  action:string='create';
  title: string = 'purchaserequest create';
  id: string;
  resp: any;
  parent: Status;
  parent1: Status[];
  objname:string = 'purchaserequest';
  obj: PurchaseRequest;
  nonAcceptedAttributes = ['Id', 'Status', 'User', 'DateCreated', 'DateUpdated', 'UpdatedByUser'];

  change(){
    this.obj.Status = this.parent;
    this.obj.UpdatedByUser = this.SysSvc.data.user.instance.Id;
    this.PrSvc.create(this.obj)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/purchaserequest/list']);
      });
  }

  constructor(private PrSvc: PurchaserequestService,
              private router: Router,
              private SysSvc: SystemService,
              private StatusSvc: StatusService,
              private route: ActivatedRoute) { super() }

  ngOnInit() {
    this.StatusSvc.list()
      .subscribe(parent1 => this.parent1 = parent1);
    this.obj = new PurchaseRequest();
    this.populateAttributeArray(this.obj);
    this.selectSpecificAttributes(this.nonAcceptedAttributes);
    this.populateAttributeTypeHash(this.obj);
  }

}
