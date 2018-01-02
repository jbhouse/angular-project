import {dbClass} from '.././dbClass';
export class User extends dbClass {

  constructor(){
    super();
    this.ID;
    this.FirstName = '';
    this.LastName = '';
    this.UserName = '';
    this.Email = '';
    this.Password = '';
    this.Phone = '';
    this.IsReviewer=false;
    this.IsAdmin=false;
    this.IsActive=false;
    this.dateCreated = null;
  }

  static sortableKeys = ['ID', 'FirstName', 'LastName', 'UserName', 'Phone', 'Email', 'Admin', 'Reviewer'];

  ID:number;
  FirstName:string;
  LastName:string;
  UserName:string;
  Email:string;
  Password:string;
  Phone:string;
  IsReviewer:boolean;
  IsAdmin:boolean;
  IsActive:boolean;
  dateCreated:Date;
}