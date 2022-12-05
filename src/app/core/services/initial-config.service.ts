import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { InitialConfig } from './initial-config.model';

@Injectable({
  providedIn: 'root',
})
export class InitialConfigService {
  private _config$: BehaviorSubject<InitialConfig> = new BehaviorSubject(
    undefined
  );
  config!: Observable<InitialConfig>;

  constructor(private http: HttpClient) {
    this.config = this._config$.asObservable();
  }

  loadAppConfig() {
    return this.getInitialConfig().pipe(
      // loadAppConfig() function returns Observable
      tap((d: any) => {
        this._config$.next(d);
        // add custom logic here
      })
    );
  }

  private getInitialConfig() {
    return this.http.get('assets/config/config.json');
  }
}
