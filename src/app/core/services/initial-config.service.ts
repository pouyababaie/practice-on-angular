import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InitialConfigService {
  setting!: any;
  constructor(private http: HttpClient) {}

  loadAppConfig() {
   return this.getInitialConfig().pipe(
      // loadAppConfig() function returns Observable
      tap((d) => {
                
        // add custom logic here
      })
    );
  }

  private getInitialConfig() {
    return this.http.get('assets/config/config.json');
  }
}
