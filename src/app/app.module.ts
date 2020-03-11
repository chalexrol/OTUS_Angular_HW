import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { SortablejsModule } from 'angular-sortablejs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WordSelectorComponent } from './word-selector/word-selector.component';
import { WordSorterComponent } from './word-sorter/word-sorter.component';
import { WordAddComponent } from './word-add/word-add.component';
import { WordSetupComponent } from './word-setup/word-setup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'words', component: WordSelectorComponent },
  { path: 'setup', component: WordSetupComponent },
  { path: 'training', component: WordSorterComponent },
  { path: 'nofound', component: PageNotFoundComponent }
];

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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    ClarityModule,
    SortablejsModule.forRoot({ animation: 150 }),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
