import {
  APP_INITIALIZER,
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './core.module-guard';
import { InitialConfigService } from './services/initial-config.service';
import {  HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

function appInitializer(config: InitialConfigService): () => Observable<any> {
  return () => config.loadAppConfig();
}

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [InitialConfigService],
      multi: true,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
