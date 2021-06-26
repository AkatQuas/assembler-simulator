import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getChar',
})
export class GetCharPipe implements PipeTransform {
  transform(value: number): string {
    const text = String.fromCharCode(value);

    if (text.trim() === '') {
      return '\u00A0\u00A0';
    }

    return text;
  }
}
