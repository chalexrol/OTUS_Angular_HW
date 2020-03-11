import { Component } from '@angular/core';
import { ShareService } from './share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foreignmemo';
  options: any;
  constructor(private shareSrv: ShareService) { }
}

