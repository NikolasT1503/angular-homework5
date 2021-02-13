import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhiteSquareComponent } from './white-square.component'; 
import { BlackSquareComponent } from './black-square/black-square.component' 



@NgModule({
  declarations: [WhiteSquareComponent, BlackSquareComponent],
  imports: [
    CommonModule
  ],
  exports: [WhiteSquareComponent, BlackSquareComponent]
})
export class SquareModule { }
