import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CientificaModule } from './cientifica';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CientificaModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
