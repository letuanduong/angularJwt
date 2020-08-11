import { Injectable } from '@angular/core';
import {IGroup} from "../interface/group";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  url = environment.API_URL_GROUP;

  constructor(private  httpClient: HttpClient) {}

  getAll(): Observable<IGroup[]>{
    return  this.httpClient.get<IGroup[]>(this.url);
  }
}
