import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RatesComponent } from './rates/rates.component';
import { ClientsOpinionComponent } from './clients-opinion/clients-opinion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RatesComponent,
    ClientsOpinionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
