import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {Product} from '../model/product';

const url = 'http://localhost:8080/Products/';
const headers: HttpHeaders = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})

@Injectable()
export class ProductService {

  list(): Observable<Product[]> {
    return this.http.get(url+"List") as Observable<Product[]>;
  }
  get(id): Observable<Product[]> {
    return this.http.get(url+id) as Observable<Product[]>;
  }
  create(prod: Product): Observable<Product[]> {
    return this.http.post(url+"Add",prod) as Observable<any>;
  }
  update(prod: Product): Observable<Product[]> {
    return this.http.put(url+prod.Id,prod) as Observable<any>;
  }
  delete(id): Observable<Product[]> {
    return this.http.delete(url+id) as Observable<any>;
  }

  constructor(private http: HttpClient) { }

}
