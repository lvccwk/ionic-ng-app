import { Component } from '@angular/core';
import { LangService, Word } from '../lang.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor(public langService: LangService) {}

  t(word: Word) {
    return this.langService.getWord(word);
  }
}
