import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
// import {ProductService} from 'product/service'
// import {Product}
// import {VendorService}
// import {Vendor}

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  title = 'product edit';
  id: string;
  resp: any;
  // product: Product;
  // vendors: Vendor[];

  change() {
    // console.log(this.product)
  };

  constructor() { }

  ngOnInit() {
  }

}
