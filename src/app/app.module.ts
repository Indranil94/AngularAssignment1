import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {SuccessComponent} from './success/success.component'
import { AppComponent } from './app.component';
import { FailureComponent } from './failure/failure.component';

@NgModule({
  declarations: [
    AppComponent,
    FailureComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
