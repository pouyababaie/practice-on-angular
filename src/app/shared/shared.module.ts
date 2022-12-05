import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const component = [];
const modules = [HttpClientModule, FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [],
  imports: [CommonModule , ...modules],
  exports:[...modules]
})
export class SharedModule {}
