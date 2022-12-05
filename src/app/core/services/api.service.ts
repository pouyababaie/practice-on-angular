import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHttpOptions } from './http.get.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(url: string, options: IHttpOptions) {
    return this.http.get(url, options);
  }

  post(url: string, body: any, options: IHttpOptions) {
    return this.http.post(url, body, options);
  }

  delete(url: string, options: IHttpOptions) {
    return this.http.delete(url, options);
  }
}
