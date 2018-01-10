import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {VendorService} from '../../../service/vendor.service';
import {SystemService} from '../../../service/system.service';


import {Vendor} from '../../../model/vendor';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent extends dbClass implements OnInit {

  title: string = 'vendor create';
  id: string;
  resp: any;
  vendor: Vendor;
  nonAcceptedAttributes = ['Id', 'DateCreated', 'Dateupdated', 'UpDatedByUser'];

  create(){
    // this.vendor.UpdatedByUser = this.SysSvc.data.user.id;
    this.VendorSvc.create(this.vendor)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/vendor/list']);
      });
  }

  constructor(private VendorSvc: VendorService,
              private router: Router,
              private SysSvc: SystemService,
              private route: ActivatedRoute) { super() }

  ngOnInit() {
    this.vendor = new Vendor();
    this.populateAttributeArray(this.vendor);
    this.selectSpecificAttributes(this.nonAcceptedAttributes);
    this.populateAttributeTypeHash(this.vendor);
  }

}
