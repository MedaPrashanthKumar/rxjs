import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { OfComponent } from './of/of.component';
import { FromComponent } from './from/from.component';
import { FromeventComponent } from './fromevent/fromevent.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsLearningComponent,
    OfComponent,
    FromComponent,
    FromeventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
