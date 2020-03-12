import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { SortablejsModule } from 'angular-sortablejs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WordAddComponent } from './word-add/word-add.component';

import { AppRoutingModule } from './app-routing.module';
import { WordSelectorComponent } from './word-selector/word-selector.component';
import { WordSorterComponent } from './word-sorter/word-sorter.component';
import { WordSetupComponent } from './word-setup/word-setup.component';


@NgModule({
  declarations: [
    AppComponent,
    WordSelectorComponent,
    WordSorterComponent,
    WordAddComponent,
    WordSetupComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ClarityModule,
    SortablejsModule.forRoot({ animation: 150 }),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) { }
}

