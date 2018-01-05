import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
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
  product: Product;
  vendors: Vendor[];
  nonAcceptedAttributes = ['Id', 'Vendor', 'DateCreated', 'DateUpdated', 'UpdatedByUser'];

  create(){
    this.ProdSvc.create(this.product)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/product/list']);
      });
  }

  constructor(private ProdSvc: ProductService,
              private VendSvc: VendorService,
              private router: Router,
              private route: ActivatedRoute) { super() }

  ngOnInit() {
    this.VendSvc.list()
      .subscribe(vendors => this.vendors = vendors);
    this.product = new Product();
    this.populateAttributeArray(this.product);
    this.selectSpecificAttributes(this.nonAcceptedAttributes);
    this.populateAttributeTypeHash(this.product);
  }

}
