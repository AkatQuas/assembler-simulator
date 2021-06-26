import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import {
  AssembleLabels,
  AssembleMapping,
  AssemblerService
} from '../assembler/assembler.service';
import { MAX_SP, OUTPUT_START_INDEX } from '../shared/constants';
import { CpuService } from '../simulator/cpu.service';
import { MemoryService } from '../simulator/memory.service';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.less'],
})
export class SimulatorComponent {

  constructor(
    public cpu: CpuService,
    public memory: MemoryService,
    public assembler: AssemblerService,
    private message: NzMessageService
  ) {}
  error = '';
  assembled = false;
  isRunning = false;
  displayHex = true;
  displayInstr = true;
  displayA = true;
  displayB = true;
  displayC = true;
  displayD = true;
  readonly speeds = [
    { speed: 1, desc: '1 Hz' },
    { speed: 4, desc: '4 Hz' },
    { speed: 8, desc: '8 Hz' },
    { speed: 16, desc: '16 Hz' },
    { speed: 32, desc: '32 Hz' },
  ];
  speed = 16;
  selectedLine = -1;
  code = `;Simple example
;Writes "Hello 42" to the output

  JMP start
hello:
  DB "Hello 42!"  ; Variable
  DB 0            ; String terminator

start:
  MOV C, hello    ; Point to var
  MOV D, 232      ; Point to output
  CALL print
  HLT             ; Stop execution

print:            ; print(C:*from, D:*to)
  PUSH A
  PUSH B
  MOV B, 0
.loop:
  MOV A, [C]      ; Get char from var
  MOV [D], A      ; Write to output
  INC C
  INC D
  CMP B, [C]      ; Check if end
  JNZ .loop       ; jump if not

  POP B
  POP A
  RET`;

  mapping: AssembleMapping;
  labels: AssembleLabels;

  runner: number = null;
  reset() {
    if (this.isRunning) {
      this.message.create('warning', `Can not reset simulator when running!`);
      return;
    }
    this.cpu.reset();
    this.memory.reset();
    this.assembled = false;
    this.error = '';
    this.selectedLine = -1;
    this.mapping = {};
    this.labels = {};
  }

  executeStep() {
    if (!this.assembled) {
      this.message.create('error', `Can not execute before assembling!`);
      return;
    }
    try {
      // Execute
      // make CPU step once, execute one instruction
      const res = this.cpu.step();

      if (this.cpu.ip in this.mapping) {
        this.selectedLine = this.mapping[this.cpu.ip];
      }
      return res;
    } catch (error) {
      this.error = `${error}`;
      return false;
    }
  }
  run() {
    this.ensureProgramLoaded();
    this.isRunning = true;
    this.runner = window.setTimeout(() => {
      if (this.executeStep() === true) {
        this.run();
      } else {
        this.isRunning = false;
      }
    }, 1000 / this.speed);
  }

  stop() {
    window.clearTimeout(this.runner);
    this.isRunning = false;
  }

  ensureProgramLoaded() {
    let needAssemble = true;
    do {
      for (let i = 0, l = this.memory.data.length; i < l; i++) {
        if (this.memory.data[i] !== 0) {
          needAssemble = false;
          break;
        }
      }
    } while (false);

    if (needAssemble) {
      this.assemble();
    }
  }

  assemble() {
    if (this.assembled) {
      return;
    }
    try {
      this.reset();
      const assembly = this.assembler.go(this.code);
      this.mapping = assembly.mapping;
      this.labels = assembly.labels;
      const binary = assembly.code;

      if (binary.length > this.memory.data.length) {
        throw new Error(
          `Binary code does not fit into the memory. Max ${this.memory.data.length} bytes are allowed`
        );
      }
      for (let i = 0, l = binary.length; i < l; i++) {
        this.memory.data[i] = binary[i];
      }
      this.assembled = true;
    } catch (error) {
      this.assembled = false;
      if (error.line !== undefined) {
        this.error = `${error.line} | ${error.error}`;
        this.selectedLine = error.line;
      } else {
        this.error = error;
      }
    }
  }

  parsedCode(code: string) {
    this.code = code;
  }
  jumpToLine(index: number | string) {
    window.document.querySelector('#sourceCode').scrollIntoView();
    this.selectedLine = this.mapping[index];
  }

  isInstruction(index: number | string) {
    return (
      this.mapping !== undefined &&
      this.mapping[index] !== undefined &&
      this.displayInstr
    );
  }

  getMemoryCellCss(index: number) {
    if (index >= OUTPUT_START_INDEX) {
      return 'output-bg';
    }

    if (this.isInstruction(index)) {
      return 'instr-bg';
    }

    if (index > this.cpu.sp && index <= MAX_SP) {
      return 'stack-bg';
    }

    return '';
  }

  getMemoryInnerCellCss(index: number) {
    if (index === this.cpu.ip) {
      return 'marker marker-ip';
    }

    if (index === this.cpu.sp) {
      return 'marker marker-sp';
    }

    if (index === this.cpu.gpr[0] && this.displayA) {
      return 'marker marker-a';
    }

    if (index === this.cpu.gpr[1] && this.displayB) {
      return 'marker marker-b';
    }

    if (index === this.cpu.gpr[2] && this.displayC) {
      return 'marker marker-c';
    }

    if (index === this.cpu.gpr[3] && this.displayD) {
      return 'marker marker-d';
    }

    return '';
  }
}
