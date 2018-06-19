import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Core
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ComicsComponent } from './comics/comics/comics.component';
import { ComicComponent } from './comics/comic/comic.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComicsComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
