import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';

const component = [];
const modules = [HttpClientModule, FormsModule, ReactiveFormsModule,TableModule];

@NgModule({
  declarations: [],
  imports: [CommonModule , ...modules],
  exports:[...modules]
})
export class SharedModule {}
