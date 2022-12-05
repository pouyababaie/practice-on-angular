import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<TD>(url: string, options?: any) {
    return this.http.get<TD>(url, options).pipe(tap((data) => data));
  }

  post(url: string, body: any, options?: any) {
    return this.http.post(url, body, options);
  }

  delete(url: string, options?: any) {
    return this.http.delete(url, options);
  }
}
