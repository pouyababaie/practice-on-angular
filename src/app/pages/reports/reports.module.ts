import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportNo1Component } from './report-no1/report-no1.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
const routes: Routes = [
  {
    path: ':id',
    component: ReportNo1Component,
  },
];
@NgModule({
  declarations: [ReportNo1Component],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ReportsModule {}
