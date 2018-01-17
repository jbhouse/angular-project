import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {VendorService} from '../../../service/vendor.service';
import {SystemService} from '../../../service/system.service';
import {Product} from '../../../model/product';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-product-list',
  templateUrl: './../../../list.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends dbClass implements OnInit {

  objName:string='product';
  title: string = 'Product List';
  selectedSortKey: string = 'Id';
  sortDesc: string = 'asc';
  sortKeys: string[] = Product.sortableKeys;
  objs: Product[];
  prod: Product;
  nonAcceptedAttributes = ['Id', 'DateCreated', 'DateUpdated', 'UpdatedByUser'];

  addIdentifier(obj){
    this.VendSvc.get(obj.Id)
      .subscribe(vendor => obj.Identifier = vendor.length > 0 ? vendor[0].Name : null)
  }

  constructor(private ProdSvc: ProductService,
              private VendSvc: VendorService,
              private SysSvc: SystemService
              ) { super() }

  ngOnInit() {
    this.ProdSvc.list()
      .subscribe(objs => {
        this.objs = objs;
        for (var i = 0; i < this.objs.length; ++i) {
          this.addIdentifier(this.objs[i]);
        }
        this.prod = new Product();
        this.populateAttributeArray(this.prod);
        this.selectSpecificAttributes(this.nonAcceptedAttributes);
        this.populateAttributeTypeHash(this.prod);

      });
  }
}
