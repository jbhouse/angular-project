export class User {

  constructor(){
    this.Id;
    this.FirstName = '';
    this.LastName = '';
    this.UserName = '';
    this.Email = '';
    this.Password = '';
    this.Phone = '';
    this.IsReviewer=false;
    this.IsAdmin=false;
    this.IsActive=false;
    this.DateCreated = null;
  }

  static sortableKeys = ['ID', 'FirstName', 'LastName', 'UserName', 'Phone', 'Email', 'Admin', 'Reviewer'];

  Id:number;
  FirstName:string;
  LastName:string;
  UserName:string;
  Email:string;
  Password:string;
  Phone:string;
  IsReviewer:boolean;
  IsAdmin:boolean;
  IsActive:boolean;
  UpdatedByUser:number;
  DateCreated:Date;
  DateUpdated:Date;
}