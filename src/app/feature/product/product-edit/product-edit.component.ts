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
  templateUrl: './../../../product-manipulate.html',
  // templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent extends dbClass implements OnInit {

  title: string = 'product edit';
  id: string;
  resp: any;
  objname:string = 'product';
  obj: Product;
  vendors: Vendor[];
  nonAcceptedAttributes = ['Id', 'DateCreated', 'DateUpdated', 'UpdatedByUser'];

  change(){
    this.obj.UpdatedByUser = this.SysSvc.data.user.instance.Id;
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
      .subscribe(vendors => this.vendors = vendors);

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
