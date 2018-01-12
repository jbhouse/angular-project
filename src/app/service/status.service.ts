import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {Status} from '../model/status';

const url = 'http://localhost:8080/Status/';
const headers: HttpHeaders = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})

@Injectable()
export class StatusService {

  list(): Observable<Status[]> {
    return this.http.get(url+"List") as Observable<Status[]>;
  }

  constructor(private http: HttpClient) { }

}
