import { Component, OnInit } from '@angular/core';

import { ReqService } from '../request.service';

@Component({
  selector: 'app-word-add',
  templateUrl: './word-add.component.html',
  styleUrls: ['./word-add.component.scss']
})
export class WordAddComponent implements OnInit {
  constructor(private service: ReqService) { }
  ngOnInit() {
    this.service.getWord();
  }
 
}
