import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[tabSupport]',
})
export class TabSupportDirective {
  constructor() {}
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      const target = event.target as HTMLTextAreaElement;
      const val = target.value;
      const start = target.selectionStart;
      const end = target.selectionEnd;

      target.value = val.substring(0, start) + '\t' + val.substring(end);
      target.selectionStart = target.selectionEnd = start + 1;

      event.preventDefault();
      return false;
    }
  }
}
