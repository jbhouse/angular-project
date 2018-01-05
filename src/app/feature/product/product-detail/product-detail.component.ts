import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../service/product.service';
import {SystemService} from '../../../service/system.service';
// import {LogService} from '../../../service/product.service';
import {Product} from '../../../model/product';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent extends dbClass implements OnInit {

  title: string = 'Product Detail';
  id:string;
  resp:any;
  nonAcceptedAttributes = ['Vendor'];
  product: Product;

  constructor(private ProdSvc: ProductService,
          private router: Router,
          private route: ActivatedRoute) { super() }

  remove() {
    this.ProdSvc.delete(this.product.Id)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/product/list']);
      })
  }

  ngOnInit() {
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
