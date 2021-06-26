import { TestBed } from '@angular/core/testing';
import { MAX_SP, MIN_SP } from '../shared/constants';
import { CpuService } from './cpu.service';

describe('CpuService', () => {
  let service: CpuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpuService);
    service.reset();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.fault).toBeFalse();
    expect(service.carry).toBeFalse();
    expect(service.zero).toBeFalse();
    expect(service.sp).toBe(MAX_SP);
    expect(service.ip).toBe(MIN_SP);
    for (let index = 0; index < service.gpr.length; index++) {
      expect(service.gpr[index]).toBe(0);
    }
  });
});
