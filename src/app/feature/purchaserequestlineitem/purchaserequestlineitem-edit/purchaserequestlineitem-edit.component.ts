import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
//
import {PurchaserequestlineitemService} from '../../../service/purchaserequestlineitem.service';
import {ProductService} from '../../../service/product.service';
import {PurchaserequestService} from '../../../service/purchaserequest.service';
//
import {PurchaseRequestLineItem} from '../../../model/purchaserequestlineitem';
import {PurchaseRequest} from '../../../model/purchaserequest';
import {Product} from '../../../model/product';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-purchaserequestlineitem-edit',
  templateUrl: './purchaserequestlineitem-edit.component.html',
  styleUrls: ['./purchaserequestlineitem-edit.component.css']
})
export class PurchaserequestlineitemEditComponent extends dbClass implements OnInit {

  title: string = 'purchaserequest edit';
  id: string;
  resp: any;
  products: Product[];
  purchaserequestlineitem: PurchaseRequestLineItem;
  nonAcceptedAttributes = ['Id', 'DateCreated', 'DateUpdated', 'UpdatedByUser', 'PurchaseRequest'];

  update(){
    this.PrliSvc.update(this.purchaserequestlineitem)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/product/list']);
      });
  }

  constructor(private PrSvc: PurchaserequestService,
              private ProdSvc: ProductService,
              private PrliSvc:PurchaserequestlineitemService,
              private router: Router,
              private route: ActivatedRoute) { super() }

  ngOnInit() {
    this.ProdSvc.list()
      .subscribe(products => this.products = products);
    this.route.params.subscribe(params => this.id = params['id']);
    this.PrliSvc.get(this.id)
      .subscribe(prs => {
        this.purchaserequestlineitem = prs.length > 0 ? prs[0] : null;
        this.populateAttributeArray(this.purchaserequestlineitem);
        this.selectSpecificAttributes(this.nonAcceptedAttributes);
        this.populateAttributeTypeHash(this.purchaserequestlineitem);
      });
  }

}
