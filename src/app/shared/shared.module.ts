import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlagPipe } from './flag.pipe';
import { GetCharPipe } from './get-char.pipe';
import { NumeralPipe } from './numeral.pipe';
import { SelectedLineDirective } from './select-line.directive';
import { TabSupportDirective } from './tab-support.directive';

const exports = [
  FlagPipe,
  NumeralPipe,
  TabSupportDirective,
  SelectedLineDirective,
  GetCharPipe,
];

@NgModule({
  declarations: exports,
  imports: [CommonModule],
  exports,
})
export class SharedModule {}
