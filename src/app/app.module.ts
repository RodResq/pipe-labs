import { DefaultPipe } from './custom-pipe/default.pipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ShortenPipe } from './shorten.pipe';


import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FilterPipe,
    DefaultPipe,
    CustomPipeComponent,
    AsyncPipeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
