import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PurchaserequestlineitemService} from '../../../service/purchaserequestlineitem.service';
import {PurchaseRequestLineItem} from '../../../model/purchaserequestlineitem';
import {dbClass} from '../../../dbClass';
import {round} from '../../../util/rounding';

@Component({
  selector: 'app-purchaserequestlineitem-detail',
  templateUrl: './../../../detail.html',
  styleUrls: ['./purchaserequestlineitem-detail.component.css']
})
export class PurchaserequestlineitemDetailComponent extends dbClass implements OnInit {

  title: string = 'Purchase Request Line Item Detail';
  id:string;
  resp:any;
  editLink:string;
  nonAcceptedAttributes = ['Product', 'DateUpdated', 'DateUpdated', 'Id', 'UpdatedByUser', 'PurchaseRequest'];
  obj: PurchaseRequestLineItem;

  constructor(private PrliSvc: PurchaserequestlineitemService,
              private router: Router,
              private route: ActivatedRoute) { super() }

  remove() {
    this.PrliSvc.delete(this.obj.Id)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/purchaserequestlineitem/list']);
      })
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.editLink = '/vendor/edit/'+this.id;
    this.PrliSvc.get(this.id)
      .subscribe(objs => {
        this.obj = objs.length > 0 ? objs[0] : null;
        this.obj.Total = round((this.obj.Quantity * this.obj.Product.Price),2);
        this.populateAttributeArray(this.obj);
        this.selectSpecificAttributes(this.nonAcceptedAttributes);
        this.populateAttributeTypeHash(this.obj);
      });
  }

}
