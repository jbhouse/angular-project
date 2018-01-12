import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

import {SystemService} from '../../../service/system.service';
import {ProductService} from '../../../service/product.service';
import {VendorService} from '../../../service/vendor.service';

import {Product} from '../../../model/product';
import {Vendor} from '../../../model/vendor';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent extends dbClass implements OnInit {

  title: string = 'product create';
  id: string;
  resp: any;
  objname: string = 'product';
  obj: Product;
  vendors: Vendor[];
  nonAcceptedAttributes = ['Id', 'DateCreated', 'DateUpdated', 'UpdatedByUser'];

  create(){
    this.obj.UpdatedByUser = this.SysSvc.data.user.instance.id;
    this.ProdSvc.create(this.obj)
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
    this.obj = new Product();
    this.populateAttributeArray(this.obj);
    this.selectSpecificAttributes(this.nonAcceptedAttributes);
    this.populateAttributeTypeHash(this.obj);
  }

}
