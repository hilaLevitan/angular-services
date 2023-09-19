import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from 'src/classes/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'https://localhost:7030/api/User/';
  constructor(private http: HttpClient) {}
  GetAll(): Observable<Array<user>> {
    debugger;
    return this.http.get<Array<user>>(this.url + 'GetAll');
  }
}
