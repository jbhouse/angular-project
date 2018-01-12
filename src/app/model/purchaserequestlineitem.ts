import {Product} from './product';
import {PurchaseRequest} from './purchaserequest';

export class PurchaseRequestLineItem {

  constructor(){
    this.Id;
    this.Product = new Product();
    this.PurchaseRequest = new PurchaseRequest();
    this.Quantity = 0;
    this.IsActive=true;
    this.UpdatedByUser;
  }

  static sortableKeys = ['Id','Product','PurchaseRequest','IsActive','UpdatedByUser'];

 Id: number;
 Product: Product;
 PurchaseRequest: PurchaseRequest;
 Quantity: number;
 IsActive: boolean;
 UpdatedByUser: number;
 Price:number;

}