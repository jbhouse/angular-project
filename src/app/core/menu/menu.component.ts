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
    new Menu('User List', 'user/list', 'check users'),
    new Menu('VendorList', '/vendor/list', 'check vendors'),
    new Menu('Login', 'user/login', 'log in to access the website'),
    new Menu('ProductList', '/product/list', 'check products'),
    // new Menu('PurchaseRequest', '/purchaserequest', 'check purchaserequests'),
    // new Menu('PurchaseRequestList', '/purchaserequestlist', 'check purchaserequests'),
    // new Menu('PurchaseRequestLineItem', '/purchaserequestlineitem', 'check purchaserequestlineitem'),
    // new Menu('PurchaseRequestLineItemList', '/purchaserequestlineitemlist', 'check purchaserequestlineitems')
  ];

  constructor() { }

  ngOnInit() {

  }

}
