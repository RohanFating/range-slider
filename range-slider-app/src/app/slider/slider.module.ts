import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SliderComponent],
  declarations: [SliderComponent],
})
export class SliderModule { }
