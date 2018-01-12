import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {SystemService} from '../../../service/system.service';
import {ProductService} from '../../../service/product.service';
import {VendorService} from '../../../service/vendor.service';

import {Product} from '../../../model/product';
import {Vendor} from '../../../model/vendor';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  // templateUrl: './../../../edit1.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent extends dbClass implements OnInit {

  title: string = 'product edit';
  id: string;
  resp: any;
  objname:string = 'product';
  obj: Product;
  parent1: Vendor[];
  parent1Route:string = 'product/list';
  nonAcceptedAttributes = ['Id', 'DateCreated', 'DateUpdated', 'UpdatedByUser'];

  update(){
    // this.obj.UpdatedByUser = this.SysSvc.data.user.id;
    this.ProdSvc.update(this.obj)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/product/list']);
      });
  }

  constructor(private ProdSvc: ProductService,
              private VendSvc: VendorService,
              private SysSvc: SystemService,
              private router: Router,
              private route: ActivatedRoute) { super() }

  ngOnInit() {
    this.VendSvc.list()
      .subscribe(parent1 => this.parent1 = parent1);

    this.route.params.subscribe(params => this.id = params['id']);
    this.ProdSvc.get(this.id)
      .subscribe(products => {
        this.obj = products.length > 0 ? products[0] : null;
        this.populateAttributeArray(this.obj);
        this.selectSpecificAttributes(this.nonAcceptedAttributes);
        this.populateAttributeTypeHash(this.obj);
        this.transformNullValues(this.obj);
      });
  }

}
