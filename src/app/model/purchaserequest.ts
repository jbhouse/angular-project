import {User} from './user';
import {Status} from './status';

export class PurchaseRequest {

  constructor(){
    this.Id;
    this.Status = new Status();
    this.User = new User();
    this.Description = '';
    this.DateNeeded = 0;
    this.SubmittedDate;
    this.Justification = '';
    this.DeliveryMode = '';
    this.IsActive=true;
    this.ReasonForRejection='';
    this.UpdatedByUser;
  }

  static sortableKeys = ['Id','DateNeeded','SubmittedDate','IsActive','UpdatedByUser'];

  Id: number;
  User: User;
  Status:Status;
  Description: string;
  Justification: string;
  DateNeeded: number;
  SubmittedDate: number;
  DeliveryMode: string;
  IsActive:boolean;
  ReasonForRejection:string;
  UpdatedByUser:number;
}