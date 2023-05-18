import { Component } from '@angular/core';
import { Lang, LangService } from '../lang.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  user = this.getInitData();

  constructor(public langService: LangService) {}

  getInitData() {
    return {
      username: '',
      password: '',
    };
  }

  reset() {
    this.user = this.getInitData();
  }

  submit() {
    console.log(this.user);
  }

  get lang() {
    return this.langService.lang;
  }

  set lang(lang: Lang) {
    this.langService.lang = lang;
  }
}
