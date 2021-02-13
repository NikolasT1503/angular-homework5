import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SquareModule } from './modules/square/square.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SquareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
