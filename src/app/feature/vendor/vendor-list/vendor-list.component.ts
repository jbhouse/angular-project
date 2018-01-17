import { Component, OnInit } from '@angular/core';

import {VendorService} from '../../../service/vendor.service';
import {SortPipe} from '../../../util/sortpipe';
// import {SystemService} from '../../../service/system.service';

import {Vendor} from '../../../model/vendor';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './../../../list.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent extends dbClass implements OnInit {

  objName = 'vendor'
  title: string = 'Vendor List';
  selectedSortKey: string = 'Id';
  sortDesc: string = 'asc';
  sortKeys: string[] = Vendor.sortableKeys;
  objs: Vendor[];
  obj:Vendor;
  nonAcceptedAttributes = ['DateCreated','Dateupdated','UpdatedByUser']


  constructor(private VendorSvc: VendorService
          // private SysSvc: SystemService,
          ) { super() }

  ngOnInit() {
    this.obj = new Vendor();
    this.populateAttributeArray(this.obj);
    this.selectSpecificAttributes(this.nonAcceptedAttributes);
    this.populateAttributeTypeHash(this.obj);
    this.VendorSvc.list()
      .subscribe(objs => {
        this.objs = objs;
      });
  }

}
