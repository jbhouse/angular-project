import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {VendorService} from '../../../service/vendor.service';
import {SystemService} from '../../../service/system.service';


import {Vendor} from '../../../model/vendor';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-vendor-create',
  // templateUrl: './vendor-create.component.html',
  templateUrl: './../../../vendor-manipulate.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent extends dbClass implements OnInit {

  action:string='create';
  title: string = 'vendor create';
  id: string;
  resp: any;
  obj: Vendor;
  nonAcceptedAttributes = ['Id', 'DateCreated', 'Dateupdated', 'UpdatedByUser', 'UpDatedByUser'];

  change(){
    this.obj.UpdatedByUser = this.SysSvc.data.user.instance.Id;
    this.VendorSvc.create(this.obj)
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
    this.obj = new Vendor();
    this.populateAttributeArray(this.obj);
    this.selectSpecificAttributes(this.nonAcceptedAttributes);
    this.populateAttributeTypeHash(this.obj);
  }

}
