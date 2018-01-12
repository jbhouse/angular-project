import { Component, OnInit } from '@angular/core';
import {PurchaserequestService} from '../../../service/purchaserequest.service';
import {SystemService} from '../../../service/system.service';
// import {LogService} from '../../../service/user.service';
import {PurchaseRequest} from '../../../model/purchaserequest';
import {dbClass} from '../../../dbClass';
import {SortPipe} from '../../../util/sortpipe'


@Component({
  selector: 'app-purchaserequest-list',
  templateUrl: './purchaserequest-list.component.html',
  // templateUrl: './../../../list2.html',
  styleUrls: ['./purchaserequest-list.component.css']
})
export class PurchaserequestListComponent extends dbClass implements OnInit {

  objName = 'purchaserequest'
  title: string = 'Purchase Request List';
  selectedSortKey: string = 'Id';
  sortDesc: string = 'asc';
  sortKeys: string[] = PurchaseRequest.sortableKeys;
  objs: PurchaseRequest[];
  pr: PurchaseRequest;
  nonAcceptedAttributes = ['Id', 'DateCreated', 'DateUpdated', 'UpdatedByUser'];

  constructor(private PrSvc: PurchaserequestService,
              private SysSvc: SystemService
            // private LogSvc: LogService
              ) { super() }

  ngOnInit() {
    this.PrSvc.list()
      .subscribe(objs => {
        this.objs = objs;
        this.pr = new PurchaseRequest();
        this.populateAttributeArray(this.pr);
        this.selectSpecificAttributes(this.nonAcceptedAttributes);
        this.populateAttributeTypeHash(this.pr);
        for (var i = 0; i < this.objs.length; ++i) {
          this.objs[i].User.Name = this.objs[i].User.FirstName + this.objs[i].User.LastName;
        }
      });
  }

}
