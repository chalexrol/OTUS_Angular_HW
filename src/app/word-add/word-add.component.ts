import { Component, OnInit } from '@angular/core';
import { fromEvent, from, of } from 'rxjs';
import { debounceTime, map, filter, distinctUntilChanged, mergeMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-word-add',
  templateUrl: './word-add.component.html',
  styleUrls: ['./word-add.component.scss']
})
export class WordAddComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    this.getWord();
  }
  getWord() {
  const input = document.getElementById('my-input2');
  const ul = document.getElementById('my-url2');
  fromEvent(input, 'keyup').pipe(
    debounceTime(700),
    map(event => event.target.value),
    filter(val => val.length > 2),
    distinctUntilChanged(),
    mergeMap(value => {
      return from(getUsersRepsFromAPI(value)).pipe(
        catchError(err => of([]))
      );
    })
  ).subscribe({
    next: reps => recordRepsToList(reps)
  });

  const recordRepsToList = (reps) => {
    if (!ul.children[0]) {
        const newEl = document.createElement('li');
        ul.appendChild(newEl);
      }
    const li = ul.children[0];
      li.innerHTML = 'Перевод : ' + reps.text[0];
  };
  const getUsersRepsFromAPI = (username) => {
  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?lang=en-ru&key=trnsl.1.1.20200213T113711Z.bed7c87204c033cf.0edf555cd415859b44ff4b7ab77c16e410ec7ea9&text=${ username }`;
    return fetch(url)
      .then(response => {
        if (response.ok) {
          console.log(response);
          return response.json();
        }
         throw new Error('Ошибка');
      });
  };
  }
}
