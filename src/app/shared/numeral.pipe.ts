import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeral',
})
export class NumeralPipe implements PipeTransform {
  transform(value: number, isHex: boolean): string {
    if (isHex) {
      const hex = value.toString(16).toUpperCase();
      // return hex.length === 1 ? '0'+hex : hex;
      return ('00' + hex).slice(-2);
    }

    return value.toString(10);
  }
}
