import { Pipe, PipeTransform } from '@angular/core';
import { join } from 'path';

@Pipe({
  name: 'titleCast'
})
export class TitleCastPipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;

    let words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      let word = words[i];

      if (i > 0 && this.isPrepositions(word)) {
        words[i] = word.toLocaleLowerCase();
      }
      else {
        words[i] = this.toTitleCase(word);
      }
    }
    return words.join(' ');
  }

  private toTitleCase(word:string):string{
    return (word.substring(0, 1).toUpperCase() + word.substring(1).toLocaleLowerCase())
  }

  private isPrepositions(word: string): boolean {
    let prepositions = ['of', 'the', 'on', 'in', 'for', 'is', 'or', 'not'];
    return prepositions.includes(word.toLocaleLowerCase())
  }

}
