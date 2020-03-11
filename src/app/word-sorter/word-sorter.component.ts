import { Component, Input, OnInit } from '@angular/core';

import { VocabularyItem } from '../word-selector/word-selector.component';
import { ShareService } from '../share.service';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-word-sorter',
  templateUrl: './word-sorter.component.html',
  styleUrls: ['./word-sorter.component.scss']
})
export class WordSorterComponent implements OnInit {
  trainingList: Array<VocabularyItem>;
  randomizedTranslations: Array<string>;
  errors: Array<VocabularyItem> = [];
  success = false;
  constructor(private shareSrv: ShareService) {
    console.log(shareSrv.data)
        }

  ngOnInit() {
    this.trainingList = this.shareSrv.data;
    this.shuffle();
  }

  words(): Array<string> {
    return this.trainingList.map(item => item.word);
  }

  translations(): Array<string> {
    return this.trainingList.map(item => item.translation);
  }

  shuffle()  {
    this.randomizedTranslations = [...this.translations()];
    this.randomizedTranslations.sort(() => Math.random() - 0.5 );
  }

  checkCorrect() {
    this.errors = [];
    this.randomizedTranslations.forEach((translation: string, index: number) => {
      if (this.trainingList[index].translation !== translation) {
        this.errors.push(this.trainingList[index])
      }
    });
    this.success = this.errors.length === 0
    setTimeout(() => {
      this.errors = [];
      this.success = false;
    }, 6000);
  }


}
