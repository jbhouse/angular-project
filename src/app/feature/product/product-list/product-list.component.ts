import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {SystemService} from '../../../service/system.service';
// import {LogService} from '../../../service/user.service';
import {Product} from '../../../model/product';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-product-list',
  // templateUrl: './product-list.component.html',
  templateUrl: './../../../list2.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends dbClass implements OnInit {

  objName:string='product';
  // urlLink:string = '/product/create';
  title: string = 'Product List';
  selectedSortKey: string = 'Id';
  sortDesc: string = 'asc';
  sortKeys: string[] = Product.sortableKeys;
  objs: Product[];
  prod: Product;
  nonAcceptedAttributes = ['Id', 'DateCreated', 'DateUpdated', 'UpdatedByUser'];

  constructor(private ProdSvc: ProductService,
              private SysSvc: SystemService
              // private LogSvc: LogService
              ) { super() }

  ngOnInit() {
    this.ProdSvc.list()
      .subscribe(objs => {
        this.objs = objs;
        this.prod = new Product();
        this.populateAttributeArray(this.prod);
        this.selectSpecificAttributes(this.nonAcceptedAttributes);
        this.populateAttributeTypeHash(this.prod);

      });
  }
}
