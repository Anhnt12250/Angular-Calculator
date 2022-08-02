import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { InputComponent } from './components/input/input.component';
import { HtmlFrameComponent } from './components/html-frame/html-frame.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    InputComponent,
    HtmlFrameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
