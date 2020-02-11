import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';
const storageKey = 'known-words';
export interface VocabularyItem {
  word: string;
  transcription: string;
  translation: string;
}
@Component({
  selector: 'app-word-selector',
  templateUrl: './word-selector.component.html',
  styleUrls: ['./word-selector.component.scss']
})
export class WordSelectorComponent implements OnInit {
  @Input() completedWord: Array<string>;
  @Output() select = new EventEmitter<Array<VocabularyItem>>();
  knownWords: Array<string> = [];
  selectedWords: Array<VocabularyItem> = [];
  constructor() { }

  ngOnInit() {
  }

}
