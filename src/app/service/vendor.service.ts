import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {Vendor} from '../model/vendor';

const url = 'http://localhost:8080/Vendors/';
const headers: HttpHeaders = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})

@Injectable()
export class VendorService {

  vendors: Vendor[];

  list(): Observable<Vendor[]> {
    return this.http.get(url+"List") as Observable<Vendor[]>;
  }
  get(id): Observable<Vendor[]> {
    return this.http.get(url+id) as Observable<Vendor[]>;
  }
  create(vendor: Vendor): Observable<Vendor[]> {
    return this.http.post(url+"Add",vendor) as Observable<any>;
  }
  update(vendor: Vendor): Observable<Vendor[]> {
    return this.http.put(url+vendor.Id,vendor) as Observable<any>;
  }
  delete(id): Observable<Vendor[]> {
    return this.http.delete(url+id) as Observable<any>;
  }

  constructor(private http: HttpClient) { }

}
