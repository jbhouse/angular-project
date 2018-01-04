export class Vendor {

  constructor(){
    this.Id;
    this.code = '';
    this.Name = '';
    this.Address = '';
    this.City = '';
    this.State = '';
    this.Zip = '';
    this.Phone = '';
    this.Email = '';
    this.IsPreApproved = false;
    this.IsActive = true;
    this.DateCreated = null;
    this.Dateupdated = null;
    this.UpdatedByUser = null;
  }

  static sortableKeys = ['Id','code','Name','Address','City','State','Zip','Phone','Email','IsPreApproved','IsActive']

  Id:number;
  code:string;
  Name:string;
  Address:string;
  City:string;
  State:string;
  Zip:string;
  Phone:string;
  Email:string;
  IsPreApproved:boolean;
  IsActive:boolean;
  DateCreated:Date;
  Dateupdated:Date;
  UpdatedByUser:number;

}