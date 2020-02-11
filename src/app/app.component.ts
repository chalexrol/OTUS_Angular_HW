import { Component } from '@angular/core';
import { VocabularyItem } from './word-selector/word-selector.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foreignmemo';
  options: any;
  trainingList: Array<VocabularyItem> = []
  wordsSelected(list: Array<VocabularyItem>) {
    this.trainingList = list;
  }
}
