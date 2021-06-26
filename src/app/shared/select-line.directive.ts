import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[selectedLine]',
})
export class SelectedLineDirective implements OnChanges {
  @Input() selectedLine = -1;

  constructor(private el: ElementRef) {}
  ngOnChanges(changes) {
    if (changes.selectedLine) {
      const { selectedLine } = changes;
      if (selectedLine.currentValue >= 0) {
        const element = this.el.nativeElement;
        const lines = element.value.split('\n');
        // Calculate start/end
        let startPos = 0;
        for (let x = 0; x < lines.length; x++) {
          if (x == selectedLine.currentValue) {
            break;
          }
          startPos += lines[x].length + 1;
        }
        const endPos = lines[selectedLine.currentValue].length + startPos;
        // // Chrome / Firefox
        if (typeof element.selectionStart != 'undefined') {
          element.focus();
          element.selectionStart = startPos;
          element.selectionEnd = endPos;
        }
      }
    }
  }
}
