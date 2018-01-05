import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../service/product.service';
import {VendorService} from '../../../service/vendor.service';
import {Product} from '../../../model/product';
import {Vendor} from '../../../model/vendor';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent extends dbClass implements OnInit {

  title: string = 'product edit';
  id: string;
  resp: any;
  product: Product;
  vendors: Vendor[];
  nonAcceptedAttributes = ['Id', 'DateCreated', 'DateUpdated', 'UpdatedByUser'];

  update(){
    this.ProdSvc.update(this.product)
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

    this.route.params.subscribe(params => this.id = params['id']);
    this.ProdSvc.get(this.id)
      .subscribe(products => {
        this.product = products.length > 0 ? products[0] : null;
        this.populateAttributeArray(this.product);
        this.selectSpecificAttributes(this.nonAcceptedAttributes);
        this.populateAttributeTypeHash(this.product);
      });
  }

}
