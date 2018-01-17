import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PurchaserequestlineitemService} from '../../../service/purchaserequestlineitem.service';
import {SystemService} from '../../../service/system.service';
import {PurchaseRequestLineItem} from '../../../model/purchaserequestlineitem';
import {dbClass} from '../../../dbClass';
import {SortPipe} from '../../../util/sortpipe'
import {round} from '../../../util/rounding';

@Component({
  selector: 'app-purchaserequestlineitem-list',
  templateUrl: './../../../list.html',
  styleUrls: ['./purchaserequestlineitem-list.component.css']
})
export class PurchaserequestlineitemListComponent extends dbClass implements OnInit {

  objName = 'purchaserequestlineitem';
  prid: number;
  title: string = 'Purchase Request Line Item List';
  selectedSortKey: string = 'Id';
  sortDesc: string = 'asc';
  sortKeys: string[] = PurchaseRequestLineItem.sortableKeys;
  objs: PurchaseRequestLineItem[];
  prli: PurchaseRequestLineItem;
  nonAcceptedAttributes = ['Id', 'IsActive', 'PurchaseRequest', 'DateCreated', 'DateUpdated', 'UpdatedByUser'];

  constructor(private PrliSvc: PurchaserequestlineitemService,
              private SysSvc: SystemService,
              private route: ActivatedRoute
              // private LogSvc: LogService
              ) { super() }

  ngOnInit() {
    // sending the purchase request id on so that our line item that will be
    // added can be added to the correct purchase rquest
    this.route.params.subscribe(params => this.prid = params['id']);
    if(this.prid){
      this.PrliSvc.listspecific(this.prid)
        .subscribe(objs => {
          this.objs = objs;
          for (var i = 0; i < this.objs.length; ++i) {
            this.objs[i].Total = round((this.objs[i].Quantity * this.objs[i].Product.Price),2);
          }
        });
    }
    // else {
    //   this.PrliSvc.list()
    //     .subscribe(purchaserequestlineitems => {
    //       this.purchaserequestlineitems = purchaserequestlineitems;
    //       for (var i = 0; i < this.purchaserequestlineitems.length; ++i) {
    //         this.purchaserequestlineitems[i].Total = round((this.purchaserequestlineitems[i].Quantity * this.purchaserequestlineitems[i].Product.Price),2);
    //       }
    //     });
    // }
      this.prli = new PurchaseRequestLineItem();
      this.prli.Total = 0;
      this.populateAttributeArray(this.prli);
      this.selectSpecificAttributes(this.nonAcceptedAttributes);
      this.populateAttributeTypeHash(this.prli);
  }

}
