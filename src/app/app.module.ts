import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpreadsheetModule } from '@syncfusion/ej2-angular-spreadsheet';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpreadsheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
