import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PurchaserequestlineitemService} from '../../../service/purchaserequestlineitem.service';
import {PurchaseRequestLineItem} from '../../../model/purchaserequestlineitem';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-purchaserequestlineitem-detail',
  templateUrl: './purchaserequestlineitem-detail.component.html',
  styleUrls: ['./purchaserequestlineitem-detail.component.css']
})
export class PurchaserequestlineitemDetailComponent extends dbClass implements OnInit {

  title: string = 'Purchase Request Line Item Detail';
  id:string;
  resp:any;
  nonAcceptedAttributes = ['Product', 'Id', 'UpdatedByUser', 'PurchaseRequest'];
  purchaserequestlineitem: PurchaseRequestLineItem;

  constructor(private PrliSvc: PurchaserequestlineitemService,
          private router: Router,
          private route: ActivatedRoute) { super() }

  remove() {
    this.PrliSvc.delete(this.purchaserequestlineitem.Id)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/purchaserequestlineitem/list']);
      })
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.PrliSvc.get(this.id)
      .subscribe(purchaserequestlineitems => {
        this.purchaserequestlineitem = purchaserequestlineitems.length > 0 ? purchaserequestlineitems[0] : null;
        this.purchaserequestlineitem.Price = parseFloat(this.purchaserequestlineitem.Quantity * this.purchaserequestlineitem.Product.Price).toFixed(2);
        this.populateAttributeArray(this.purchaserequestlineitem);
        this.selectSpecificAttributes(this.nonAcceptedAttributes);
        this.populateAttributeTypeHash(this.purchaserequestlineitem);
      });
  }

}
