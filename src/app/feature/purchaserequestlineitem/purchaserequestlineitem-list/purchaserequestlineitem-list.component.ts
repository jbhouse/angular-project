import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PurchaserequestlineitemService} from '../../../service/purchaserequestlineitem.service';
import {SystemService} from '../../../service/system.service';
// import {LogService} from '../../../service/user.service';
import {PurchaseRequestLineItem} from '../../../model/purchaserequestlineitem';
import {dbClass} from '../../../dbClass';
import {SortPipe} from '../../../util/sortpipe'

@Component({
  selector: 'app-purchaserequestlineitem-list',
  templateUrl: './purchaserequestlineitem-list.component.html',
  styleUrls: ['./purchaserequestlineitem-list.component.css']
})
export class PurchaserequestlineitemListComponent extends dbClass implements OnInit {

  prid: number;
  title: string = 'Purchase Request Line Item List';
  selectedSortKey: string = 'Id';
  sortDesc: string = 'asc';
  sortKeys: string[] = PurchaseRequestLineItem.sortableKeys;
  purchaserequestlineitems: PurchaseRequestLineItem[];
  prli: PurchaseRequestLineItem;
  nonAcceptedAttributes = ['Id', 'DateCreated', 'DateUpdated', 'UpdatedByUser'];

  constructor(private PrliSvc: PurchaserequestlineitemService,
              private SysSvc: SystemService,
              private route: ActivatedRoute
              // private LogSvc: LogService
              ) { super() }

  ngOnInit() {
    // sending the purchase request id on so that our line item that will be
    // added can be added to the correct purchase rquest
    this.route.params.subscribe(params => this.prid = params['id']);
    this.PrliSvc.list()
      .subscribe(purchaserequestlineitems => {
        this.purchaserequestlineitems = purchaserequestlineitems;
        this.prli = new PurchaseRequestLineItem();
        this.populateAttributeArray(this.prli);
        this.selectSpecificAttributes(this.nonAcceptedAttributes);
        this.populateAttributeTypeHash(this.prli);
      });
  }

}
