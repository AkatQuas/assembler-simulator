import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { OUTPUT_START_INDEX } from '../shared/constants';
import { MemoryService } from '../simulator/memory.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.less'],
})
export class OutputComponent implements OnInit, OnDestroy {
  output$: Subscription;
  data: number[];
  outputStartIndex = OUTPUT_START_INDEX;

  constructor(private memory: MemoryService) {}
  ngOnDestroy(): void {
    this.output$?.unsubscribe();
  }

  ngOnInit(): void {
    this.output$ = this.memory.output$
      .pipe(tap((v) => void (this.data = v)))
      .subscribe();
  }
}
