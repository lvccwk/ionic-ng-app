import { Injectable } from '@angular/core';

export const en = {
  reset: 'reset',
  submit: 'submit',
  settings: 'settings',
  shopping: 'shopping',
};

export const zh_hk = {
  reset: '重設',
  submit: '提交',
  settings: '設定',
  shopping: '購物',
};

export const langs = {
  en,
  zh_hk,
};

export type Langs = typeof langs;

export type Lang = keyof Langs;

export type Word = keyof Langs[Lang];

@Injectable({
  providedIn: 'root',
})
export class LangService {
  lang: Lang = 'en';

  constructor() {}

  getWord(word: Word) {
    return langs[this.lang][word];
  }
}
