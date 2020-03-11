import { Injectable } from '@angular/core';
import { VocabularyItem } from './word-selector/word-selector.component'; 

@Injectable({
  providedIn: 'root',
})

export class ShareService {
  data: Array<VocabularyItem> = [];
}