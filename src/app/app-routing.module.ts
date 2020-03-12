import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WordSelectorComponent } from './word-selector/word-selector.component';
import { WordSorterComponent } from './word-sorter/word-sorter.component';
import { WordSetupComponent } from './word-setup/word-setup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: 'words', component: WordSelectorComponent },
    { path: 'setup', component: WordSetupComponent },
    { path: 'training', component: WordSorterComponent },
    { path: 'nofound', component: PageNotFoundComponent },
    { path: '',   redirectTo: '/words', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {
          enableTracing: true, // <-- debugging purposes only
        }
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { } 