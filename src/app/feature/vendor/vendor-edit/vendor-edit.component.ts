import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {VendorService} from '../../../service/vendor.service';
import {SystemService} from '../../../service/system.service';

import {Vendor} from '../../../model/vendor';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './../../../edit.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent extends dbClass implements OnInit {

	title: string = 'vendor edit';
	id: string;
	resp: any;
  objname: string = 'vendor';
	obj: Vendor;
  nonAcceptedAttributes = ['Id', 'DateCreated', 'DateUpdated', 'UpDatedByUser'];

	update(){
    this.obj.UpdatedByUser = this.SysSvc.data.user.instance.id;
		this.VendorSvc.update(this.obj)
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
    this.route.params.subscribe(params => this.id = params['id']);
    this.VendorSvc.get(this.id)
      .subscribe(objs => {
        this.obj = objs.length > 0 ? objs[0] : null;
        this.populateAttributeArray(this.obj);
        this.selectSpecificAttributes(this.nonAcceptedAttributes);
        this.populateAttributeTypeHash(this.obj);
      });
  }
}
