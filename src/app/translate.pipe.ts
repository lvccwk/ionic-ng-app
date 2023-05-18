import { Pipe, PipeTransform } from '@angular/core';
import { LangService, Word } from './lang.service';

@Pipe({
  name: 't',
})
export class TranslatePipe implements PipeTransform {
  constructor(public langService: LangService) {}

  transform(word: Word): string {
    return this.langService.getWord(word);
  }
}
