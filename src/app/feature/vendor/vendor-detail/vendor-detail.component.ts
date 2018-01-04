import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {VendorService} from '../../../service/vendor.service';
import {Vendor} from '../../../model/vendor';
import {dbClass} from '../../../dbClass';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent extends dbClass implements OnInit {

	title: string = 'Vendor detail';
	id: string;
	resp: any;
	vendor: Vendor;
	myVendor: Vendor;
	nonAcceptedAttributes = ['Id','UpDatedByUser'];

	remove() {
		this.VendorSvc.delete(this.vendor.Id)
			.subscribe(resp => {
				this.resp = resp;
				console.log('vendor-detail remove', this.resp);
				this.router.navigate(['/vendor/list']);
			})
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
