import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

// import { ComaComponent } from './coma/coma.component';
import { CombComponent } from './comb/comb.component';
import { ComaComponent } from './coma/coma.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, ComaComponent, CombComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
