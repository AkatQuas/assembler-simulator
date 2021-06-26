import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OPCodes, OUTPUT_START_INDEX } from '../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class MemoryService {
  output$ = new BehaviorSubject<number[]>([]);
  data: Array<number | OPCodes>;
  lastAccess = -1;

  constructor() {
    this.data = new Array(256);
    this.reset();
  }

  /**
   * load value from address
   * @param address
   */
  public load(address: number) {
    this.checkAddress(address);
    this.lastAccess = address;
    return this.data[address];
  }

  /**
   * store value at address
   * @param address
   * @param value
   */
  public store(address: number, value: number) {
    this.checkAddress(address);
    this.lastAccess = address;
    this.data[address] = value;
    if (address >= OUTPUT_START_INDEX) {
      this.emitOutput();
    }
  }
  /**
   * reset memory to 0000000...0
   */
  public reset() {
    this.lastAccess = -1;
    const { data } = this;
    for (let index = 0, l = this.data.length; index < l; index++) {
      data[index] = 0;
    }
    this.emitOutput();
  }

  /**
   * check address validation
   * @param address
   */
  public checkAddress(address: number) {
    if (address < 0 || address >= this.data.length) {
      throw new Error(`Memory access violation at ${address}`);
    }
  }

  private emitOutput() {
    this.output$.next(this.data.slice(OUTPUT_START_INDEX));
  }
}
