import { Component, OnInit } from '@angular/core';
import {Menu} from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: Menu[] = [
    new Menu('HOME','/home','home menu item'),
    new Menu('USERLIST', 'user/list', 'check users')
    // new Menu('Vendor', '/vendor', 'check vendors'),
    // new Menu('VendorList', '/vendorlist', 'check vendors'),
    // new Menu('Product', '/product', 'check products'),
    // new Menu('ProductList', '/productlist', 'check products'),
    // new Menu('PurchaseRequest', '/purchaserequest', 'check purchaserequests'),
    // new Menu('PurchaseRequestList', '/purchaserequestlist', 'check purchaserequests'),
    // new Menu('PurchaseRequestLineItem', '/purchaserequestlineitem', 'check purchaserequestlineitem'),
    // new Menu('PurchaseRequestLineItemList', '/purchaserequestlineitemlist', 'check purchaserequestlineitems')
  ];

  constructor() { }

  ngOnInit() {

  }

}
