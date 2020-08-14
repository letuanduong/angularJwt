import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IType} from "../_models/type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IType[]> {
    return this.httpClient.get<IType[]>(this.url + '/types');
  }
}
