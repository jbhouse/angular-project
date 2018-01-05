import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {SystemService} from '../../../service/system.service';
// import {LogService} from '../../../service/user.service';
import {Product} from '../../../model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  title: string = 'Product List';
  selectedSortKey: string = 'Id';
  sortDesc: string = 'asc';
  sortKeys: string[] = Product.sortableKeys;
  products: Product[];

  constructor(private ProdSvc: ProductService,
              private SysSvc: SystemService
          // private LogSvc: LogService
          ) { }

  ngOnInit() {
    this.ProdSvc.list()
      .subscribe(products => {
        this.products = products;
      });
  }
}
