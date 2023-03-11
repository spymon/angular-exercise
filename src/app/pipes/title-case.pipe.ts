import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
})
export class TitleCasePipe implements PipeTransform {
  transform(inputText: string): any {
    if (!inputText) return null;

    let words = inputText.split(' ');
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (i > 0 && this.isPreposition(word)) words[i] = word.toLowerCase();
      else words[i] = this.toTitleCase(word);
    }

    return words.join(' ');
  }

  private toTitleCase(word: string): string {
    return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  }

  private isPreposition(word: string): boolean {
    const prepositions = [
      'a',
      'abaft',
      'aboard',
      'about',
      'above',
      'absent',
      'across',
      'afore',
      'after',
      'against',
      'along',
      'alongside',
      'amid',
      'amidst',
      'among',
      'amongst',
      'an',
      'anenst',
      'apropos',
      'apud',
      'around',
      'as',
      'aside',
      'astride',
      'at',
      'athwart',
      'atop',
      'barring',
      'before',
      'behind',
      'below',
      'beneath',
      'beside',
      'besides',
      'between',
      'beyond',
      'but',
      'by',
      'circa',
      'concerning',
      'despite',
      'down',
      'during',
      'except',
      'excluding',
      'failing',
      'following',
      'for',
      'forenenst',
      'from',
      'given',
      'in',
      'including',
      'inside',
      'into',
      'lest',
      'like',
      'mid',
      'midst',
      'minus',
      'modulo',
      'near',
      'next',
      'notwithstanding',
      'of',
      'off',
      'on',
      'onto',
      'opposite',
      'out',
      'outside',
      'over',
      'pace',
      'past',
      'per',
      'plus',
      'pro',
      'qua',
      'regarding',
      'round',
      'sans',
      'save',
      'since',
      'than',
      'the',
      'through',
      'throughout',
      'till',
      'times',
      'to',
      'toward',
      'towards',
      'under',
      'underneath',
      'unlike',
      'until',
      'unto',
      'up',
      'upon',
      'versus',
      'via',
      'vice',
      'with',
      'within',
      'without',
      'worth',
    ];

    return prepositions.includes(word.toLowerCase());
  }
}
