import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlackSquareComponent } from './black-square/black-square.component';
import { WhiteSquareComponent } from './white-square/white-square.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackSquareComponent,
    WhiteSquareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
