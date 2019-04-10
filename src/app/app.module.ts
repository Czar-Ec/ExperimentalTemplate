import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MaterialModule } from './modules/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContentComponent } from './components/content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { DemoPageComponent } from './components/content/demo-page/demo-page.component';
import { AboutPageComponent } from './components/content/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContentComponent,
    DemoPageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: './'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
