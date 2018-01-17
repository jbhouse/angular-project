import {Vendor} from './vendor';

export class Product {

  // constructor(id:number = 0,
  //             vendor:Vendor = new Vendor(),
  //             pn:string='',
  //             name:string='',
  //             price:number=0,
  //             unit:string='',
  //             ppath:string=''){
  //   this.Id = id;
  //   this.Vendor = vendor;
  //   this.PartNumber = pn;
  //   this.Name = name;
  //   this.Price = price;
  //   this.Unit = unit;
  //   this.PhotoPath = ppath;
  // }

  constructor(){
    this.Id;
    this.Vendor = new Vendor();
    this.PartNumber = '';
    this.Name = '';
    this.Price = 0;
    this.Unit = ' ';
    this.PhotoPath = ' ';
    this.UpdatedByUser=0;
  }

  static sortableKeys = ['Id','PartNumber','Name','Price','Unit'];

  Id: number;
  Vendor: Vendor;
  PartNumber: string;
  Name: string;
  Price: number;
  Unit: string;
  PhotoPath: string;
  UpdatedByUser:number;
  Identifier:string;
}