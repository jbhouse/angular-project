import { Component, OnInit } from '@angular/core';
import {PurchaserequestService} from '../../../service/purchaserequest.service';
import {StatusService} from '../../../service/status.service';
import {PurchaserequestlineitemService} from '../../../service/purchaserequestlineitem.service';
import {SystemService} from '../../../service/system.service';
// import {LogService} from '../../../service/user.service';
import {PurchaseRequest} from '../../../model/purchaserequest';
import {dbClass} from '../../../dbClass';
import {SortPipe} from '../../../util/sortpipe'

@Component({
  selector: 'app-purchaserequest-list',
  templateUrl: './../../../list.html',
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

  // appendLineItems(event) {
  //   event.preventDefault();
  //   let purchaseId: any = event.srcElement.name.substring(19,event.srcElement.name.length)
  //   console.log(purchaseId)
  //   var parentRequest = document.getElementById("purchaserequest"+purchaseId)
  //   console.log(parentRequest)
  //   this.PrliSvc.listspecific(purchaseId)
  //     .subscribe(prlis => {
  //       console.log(prlis)
  //       if (prlis.length>0) {
  //         for (var i = 0; i < prlis.length; ++i) {
  //           // var parentRequest = document.getElementById("purchaserequest"+purchaseId)
  //           let row = document.createElement("tr")
  //           let name = document.createElement("td")
  //           name.innerHTML = prlis[i].Product.Name;
  //           let quantity = document.createElement("td")
  //           quantity.innerHTML = prlis[i].Quantity.toString();
  //           row.appendChild(name)
  //           let price = document.createElement("td")
  //           price.innerHTML = prlis[i].Product.Price.toString();
  //           row.appendChild(price)
  //           row.appendChild(quantity)
  //           parentRequest.appendChild(row);
  //         }
  //       } else {
  //         console.log(parentRequest);
  //       }
  //     });
  // }

  constructor(private PrSvc: PurchaserequestService,
              private StatSvc: StatusService,
              private SysSvc: SystemService,
              private PrliSvc: PurchaserequestlineitemService
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
