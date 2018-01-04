import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {VendorService} from '../../../service/vendor.service';
import {Vendor} from '../../../model/vendor';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent extends dbClass implements OnInit {

	title: string = 'vendor edit';
	id: string;
	resp: any;
	vendor: Vendor;
  	nonAcceptedAttributes = ['Id', 'DateCreated', 'DateUpdated', 'UpdatedByUser'];

	update(){
		this.VendorSvc.update(this.vendor)
			.subscribe(resp => {
				this.resp = resp;
				this.router.navigate(['/vendor/list']);
			});
	}

  constructor(private VendorSvc: VendorService,
  		    	  private router: Router,
  			      private route: ActivatedRoute) { super() }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.VendorSvc.get(this.id)
      .subscribe(vendors => {
        this.vendor = vendors.length > 0 ? vendors[0] : null;
        this.populateAttributeArray(this.vendor);
        this.selectSpecificAttributes(this.nonAcceptedAttributes);
        this.populateAttributeTypeHash(this.vendor);
      });
  }
}
