import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SocialComponent } from './social/social.component';
import { SocialModule } from "./social/social.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SocialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
