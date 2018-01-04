import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {User} from '../model/user';

const url = 'http://localhost:8080/Users/';
const headers: HttpHeaders = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})

@Injectable()
export class UserService {

	users : User[];
	authenticate(user: User): Observable<User[]>{
		return this.http.post(url+"Authenticate",user) as Observable<User[]>;
	}
	list(): Observable<User[]> {
		return this.http.get(url+"List") as Observable<User[]>;
	}
	get(id): Observable<User[]> {
		return this.http.get(url+id) as Observable<User[]>;
	}
	create(user: User): Observable<User[]> {
		return this.http.post(url+"Add",user) as Observable<any>;
	}
	update(user: User): Observable<User[]> {
		return this.http.put(url+user.Id,user) as Observable<any>;
	}
	delete(id): Observable<User[]> {
		return this.http.delete(url+id) as Observable<any>;
	}

  constructor(private http: HttpClient) { }

}
