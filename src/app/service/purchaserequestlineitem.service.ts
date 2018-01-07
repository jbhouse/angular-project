import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {PurchaseRequestLineItem} from '../model/purchaserequestlineitem';

const url = 'http://localhost:8080/PurchaseRequestLineItems/';
const headers: HttpHeaders = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})

@Injectable()
export class PurchaserequestlineitemService {

  listspecific(id): Observable<PurchaseRequestLineItem[]> {
    return this.http.get('http://localhost:8080/PurchaseRequests/LineItems/'+id) as Observable<PurchaseRequestLineItem[]>;
  }
  list(): Observable<PurchaseRequestLineItem[]> {
    return this.http.get(url+"List") as Observable<PurchaseRequestLineItem[]>;
  }
  get(id): Observable<PurchaseRequestLineItem[]> {
    return this.http.get(url+id) as Observable<PurchaseRequestLineItem[]>;
  }
  create(pr: PurchaseRequestLineItem): Observable<PurchaseRequestLineItem[]> {
    return this.http.post(url+"Add",pr) as Observable<any>;
  }
  update(pr: PurchaseRequestLineItem): Observable<PurchaseRequestLineItem[]> {
    return this.http.put(url+pr.Id,pr) as Observable<any>;
  }
  delete(id): Observable<PurchaseRequestLineItem[]> {
    return this.http.delete(url+id) as Observable<any>;
  }

  constructor(private http: HttpClient) { }

}
