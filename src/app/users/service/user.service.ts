import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interface/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(this.url);
  }

  getById(id: number): Observable<IUser>{
    return this.httpClient.get<IUser>(this.url + '/' + id);
  }

  delete(id: number): Observable<IUser>{
    return this.httpClient.delete<IUser>(this.url + '/' + id + '/delete');
  }

  add(user: IUser): Observable<IUser>{
    return this.httpClient.post<IUser>(this.url + '/add', user);
  }

  edit(user: IUser): Observable<IUser>{
    return this.httpClient.put<IUser>(this.url + user.id + '/edit', user);
  }



}
