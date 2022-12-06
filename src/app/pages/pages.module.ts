import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutsModule } from '../layouts/layouts.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule, LayoutsModule],
})
export class PagesModule {}
