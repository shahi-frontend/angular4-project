import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component.component';
import { BlueColorDirective } from './blue-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    BlueColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
