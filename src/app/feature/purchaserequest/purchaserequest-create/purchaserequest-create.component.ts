import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {SystemService} from '../../../service/system.service';
import {PurchaserequestService} from '../../../service/purchaserequest.service';
import {PurchaseRequest} from '../../../model/purchaserequest';
import {Status} from '../../../model/status';
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
  objname:string = 'purchaserequest';
  obj: PurchaseRequest;
  nonAcceptedAttributes = ['Id', 'Status', 'User', 'DateCreated', 'DateUpdated', 'UpdatedByUser'];

  create(){
    this.obj.UpdatedByUser = this.SysSvc.data.user.instance.Id;
    this.obj.Status = new Status();
    this.PrSvc.create(this.obj)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/purchaserequest/list']);
      });
  }

  constructor(private PrSvc: PurchaserequestService,
              private router: Router,
              private SysSvc: SystemService,
              private route: ActivatedRoute) { super() }

  ngOnInit() {
    this.obj = new PurchaseRequest();
    this.populateAttributeArray(this.obj);
    this.selectSpecificAttributes(this.nonAcceptedAttributes);
    this.populateAttributeTypeHash(this.obj);
  }


}
