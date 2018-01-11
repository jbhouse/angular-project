import { Component, OnInit } from '@angular/core';

import {VendorService} from '../../../service/vendor.service';
import {SortPipe} from '../../../util/sortpipe';
// import {SystemService} from '../../../service/system.service';

import {Vendor} from '../../../model/vendor';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent extends dbClass implements OnInit {

  title: string = 'Vendor List';
  selectedSortKey: string = 'Id';
  sortDesc: string = 'asc';
  sortKeys: string[] = Vendor.sortableKeys;
  vendors: Vendor[];
  vendor:Vendor;
  nonAcceptedAttributes = ['DateCreated','Dateupdated','UpdatedByUser']


  constructor(private VendorSvc: VendorService
          // private SysSvc: SystemService,
          // private LogSvc: LogService
          ) { super() }

  ngOnInit() {
    this.vendor = new Vendor();
    this.populateAttributeArray(this.vendor);
    this.selectSpecificAttributes(this.nonAcceptedAttributes);
    this.VendorSvc.list()
      .subscribe(vendors => {
        this.vendors = vendors;
      });
  }

}
