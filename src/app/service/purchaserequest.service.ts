import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {PurchaseRequest} from '../model/purchaserequest';

const url = 'http://localhost:8080/PurchaseRequests/';
const headers: HttpHeaders = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})

@Injectable()
export class PurchaserequestService {

  list(): Observable<PurchaseRequest[]> {
    return this.http.get(url+"List") as Observable<PurchaseRequest[]>;
  }
  get(id): Observable<PurchaseRequest[]> {
    return this.http.get(url+id) as Observable<PurchaseRequest[]>;
  }
  create(pr: PurchaseRequest): Observable<PurchaseRequest[]> {
    return this.http.post(url+"Add",pr) as Observable<any>;
  }
  update(pr: PurchaseRequest): Observable<PurchaseRequest[]> {
    return this.http.put(url+pr.Id,pr) as Observable<any>;
  }
  delete(id): Observable<PurchaseRequest[]> {
    return this.http.delete(url+id) as Observable<any>;
  }

  constructor(private http: HttpClient) { }

}
