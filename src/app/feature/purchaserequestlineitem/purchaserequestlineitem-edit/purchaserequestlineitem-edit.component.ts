import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
//
import {SystemService} from '../../../service/system.service';
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
  obj: PurchaseRequestLineItem;
  objname: string = 'purchaserequestlineitem';
  nonAcceptedAttributes = ['Id', 'DateCreated', 'DateUpdated', 'UpdatedByUser', 'PurchaseRequest'];

  update(){
    // this.obj.UpdatedByUser = this.SysSvc.data.user.id;
    this.PrliSvc.update(this.obj)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/product/list']);
      });
  }

  constructor(private PrSvc: PurchaserequestService,
              private ProdSvc: ProductService,
              private PrliSvc:PurchaserequestlineitemService,
              private SysSvc: SystemService,
              private router: Router,
              private route: ActivatedRoute) { super() }

  ngOnInit() {
    this.ProdSvc.list()
      .subscribe(products => this.products = products);
    this.route.params.subscribe(params => this.id = params['id']);
    this.PrliSvc.get(this.id)
      .subscribe(prs => {
        this.obj = prs.length > 0 ? prs[0] : null;
        this.populateAttributeArray(this.obj);
        this.selectSpecificAttributes(this.nonAcceptedAttributes);
        this.populateAttributeTypeHash(this.obj);
      });
  }

}
