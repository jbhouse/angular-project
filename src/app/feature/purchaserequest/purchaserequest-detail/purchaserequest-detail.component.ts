import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PurchaserequestService} from '../../../service/purchaserequest.service';
// import {StatusService} from '../../../service/status.service';
import {PurchaseRequest} from '../../../model/purchaserequest';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-purchaserequest-detail',
  templateUrl: './purchaserequest-detail.component.html',
  styleUrls: ['./purchaserequest-detail.component.css']
})
export class PurchaserequestDetailComponent extends dbClass implements OnInit {

  title: string = 'Product Detail';
  id:string;
  resp:any;
  nonAcceptedAttributes = ['User','Status','UpdatedByUser','Id','DateCreated','DateUpdated'];
  purchaserequest: PurchaseRequest;

  constructor(private PrSvc: PurchaserequestService,
          private router: Router,
          private route: ActivatedRoute) { super() }

  remove() {
    this.PrSvc.delete(this.purchaserequest.Id)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/purchaserequest/list']);
      })
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.PrSvc.get(this.id)
      .subscribe(purchaserequests => {
        this.purchaserequest = purchaserequests.length > 0 ? purchaserequests[0] : null;
        this.populateAttributeArray(this.purchaserequest);
        this.selectSpecificAttributes(this.nonAcceptedAttributes);
        this.populateAttributeTypeHash(this.purchaserequest);
      });
  }

}
