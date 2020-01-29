import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ConversorComponent } from './components';
import { MoedaService } from "./services";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
  	ConversorComponent,
  ],
  exports: [
  	ConversorComponent
  ],
  providers: [
    MoedaService
  ]
})
export class ConversorModule { }
