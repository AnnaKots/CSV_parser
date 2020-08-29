import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    ReactiveFormsModule],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
  })
  export class AppModule { }
