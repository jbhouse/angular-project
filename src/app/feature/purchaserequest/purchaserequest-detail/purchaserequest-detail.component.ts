import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PurchaserequestService} from '../../../service/purchaserequest.service';
// import {StatusService} from '../../../service/status.service';
import {PurchaseRequest} from '../../../model/purchaserequest';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-purchaserequest-detail',
  templateUrl: './../../../detail.html',
  styleUrls: ['./purchaserequest-detail.component.css']
})
export class PurchaserequestDetailComponent extends dbClass implements OnInit {

  title: string = 'Product Detail';
  id:string;
  resp:any;
  editLink:string;
  nonAcceptedAttributes = ['User','Status','UpDatedByUser','UpdatedByUser','Id','DateCreated','DateUpdated'];
  obj: PurchaseRequest;

  constructor(private PrSvc: PurchaserequestService,
          private router: Router,
          private route: ActivatedRoute) { super() }

  remove() {
    this.PrSvc.delete(this.obj.Id)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/purchaserequest/list']);
      })
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.editLink = '/vendor/edit/'+this.id;
    this.PrSvc.get(this.id)
      .subscribe(objs => {
        this.obj = objs.length > 0 ? objs[0] : null;
        this.populateAttributeArray(this.obj);
        this.selectSpecificAttributes(this.nonAcceptedAttributes);
        this.populateAttributeTypeHash(this.obj);
      });
  }

}
