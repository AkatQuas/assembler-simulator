import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { AssembleLabels } from '../assembler/assembler.service';
import { MemoryService } from '../simulator/memory.service';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.less'],
})
export class LabelsComponent implements OnChanges {
  @Input() displayHex = false;
  @Input() labels: AssembleLabels = {};
  @Output() jump = new EventEmitter();
  _data = [];

  constructor(public memory: MemoryService) {}

  ngOnChanges(changes: SimpleChanges) {
    const currentValue = changes.labels.currentValue;
    if (currentValue) {
      if (Object.keys(currentValue).length > 0) {
        this._data = [1];
      } else {
        this._data = [];
      }
    }
  }

  jumpToLine(index: number) {
    this.jump.emit(index);
  }
}
