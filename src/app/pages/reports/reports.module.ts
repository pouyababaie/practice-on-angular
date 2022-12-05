import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportNo1Component } from './report-no1/report-no1.component';
import { ReportNo2Component } from './report-no2/report-no2.component';



@NgModule({
  declarations: [
    ReportNo1Component,
    ReportNo2Component
  ],
  imports: [
    CommonModule
  ]
})
export class ReportsModule { }
