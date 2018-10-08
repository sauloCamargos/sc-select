import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScSelectComponent } from './sc-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterListPipe } from './sc-filter.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ScSelectComponent,
    FilterListPipe,
  ],
  exports:[
    ScSelectComponent,
    FilterListPipe
  ]
})
export class ScSelectModule { }
