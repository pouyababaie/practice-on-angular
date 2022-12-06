import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

import { PokemonReportComponent } from './pokemon-report.component';
const routes: Routes = [
  {
    path: ':id',
    component: PokemonReportComponent,
  },
];
@NgModule({
  declarations: [PokemonReportComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ReportsModule {}
