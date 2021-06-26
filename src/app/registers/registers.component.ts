import { Component, Input } from '@angular/core';
import { CpuService } from '../simulator/cpu.service';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.less'],
})
export class RegistersComponent {
  @Input() displayHex = false;

  constructor(public cpu: CpuService) {}
}
