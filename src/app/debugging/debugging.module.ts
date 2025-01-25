import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebuggingComponent } from './debugging.component';

@NgModule({
  declarations: [
    DebuggingComponent,  
  ],
  imports: [
    CommonModule     
  ],
  exports: [
    DebuggingComponent,  
  ]
})
export class DebuggingModule { }