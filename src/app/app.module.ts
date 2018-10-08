import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScSelectComponent } from './sc-select/sc-select.component';
import { ScSelectModule } from './sc-select/sc-select.module';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    ScSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
