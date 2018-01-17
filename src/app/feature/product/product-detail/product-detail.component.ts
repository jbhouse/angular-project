import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../service/product.service';
import {SystemService} from '../../../service/system.service';
import {Product} from '../../../model/product';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-product-detail',
  templateUrl: './../../../detail.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent extends dbClass implements OnInit {

  title: string = 'Product Detail';
  id:string;
  resp:any;
  editLink:string;
  nonAcceptedAttributes = ['Vendor'];
  obj: Product;

  constructor(private ProdSvc: ProductService,
          private router: Router,
          private route: ActivatedRoute) { super() }

  remove() {
    this.ProdSvc.delete(this.obj.Id)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/product/list']);
      })
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.editLink = '/vendor/edit/'+this.id;
    this.ProdSvc.get(this.id)
      .subscribe(objs => {
        this.obj = objs.length > 0 ? objs[0] : null;
        this.populateAttributeArray(this.obj);
        this.selectSpecificAttributes(this.nonAcceptedAttributes);
        this.populateAttributeTypeHash(this.obj);
      });
  }
}
