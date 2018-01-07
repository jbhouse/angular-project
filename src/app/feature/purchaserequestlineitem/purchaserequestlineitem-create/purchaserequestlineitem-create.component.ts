import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PurchaserequestlineitemService} from '../../../service/purchaserequestlineitem.service';
import {PurchaseRequestLineItem} from '../../../model/purchaserequestlineitem';
import {PurchaserequestService} from '../../../service/purchaserequest.service';
import {PurchaseRequest} from '../../../model/purchaserequest';
import {ProductService} from '../../../service/product.service';
import {Product} from '../../../model/product';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-purchaserequestlineitem-create',
  templateUrl: './purchaserequestlineitem-create.component.html',
  styleUrls: ['./purchaserequestlineitem-create.component.css']
})
export class PurchaserequestlineitemCreateComponent extends dbClass implements OnInit {

  title: string = 'purchaserequestlineitem create';
  prid: string;
  resp: any;
  purchaserequest: PurchaseRequest;
  products: Product[];
  purchaserequestlineitem: PurchaseRequestLineItem;
  nonAcceptedAttributes = ['Id', 'PurchaseRequest'];

  create(){
    // console.log(this.purchaserequestlineitem.Product);
    this.PrliSvc.create(this.purchaserequestlineitem)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/purchaserequestlineitem/listspecific/'+this.prid]);
      });
  }

  constructor(private PrliSvc: PurchaserequestlineitemService,
              private ProdSvc: ProductService,
              private PrSvc: PurchaserequestService,
              private router: Router,
              private route: ActivatedRoute) { super() }

  ngOnInit() {
    this.route.params.subscribe(params => this.prid = params['id']);
    this.ProdSvc.list()
      .subscribe(products => this.products = products);
    this.PrSvc.get(this.prid)
      .subscribe(pr => {
        this.purchaserequest = pr.length > 0 ? pr[0] : null
        this.purchaserequestlineitem = new PurchaseRequestLineItem();
        this.populateAttributeArray(this.purchaserequestlineitem);
        this.selectSpecificAttributes(this.nonAcceptedAttributes);
        this.populateAttributeTypeHash(this.purchaserequestlineitem);
        this.purchaserequestlineitem.PurchaseRequest = this.purchaserequest;
    });
  }

}