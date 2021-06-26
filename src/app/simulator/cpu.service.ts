import { Injectable } from '@angular/core';
import { MAX_SP, MIN_SP, OPCodes } from '../shared/constants';
import { MemoryService } from './memory.service';

@Injectable({
  providedIn: 'root',
})
export class CpuService {
  gpr: [number, number, number, number];
  ip: number;
  sp: number;
  zero: boolean;
  carry: boolean;
  fault: boolean;

  constructor(private memory: MemoryService) {
    this.reset();
  }

  /**
   * reset the states,
   * simulates the restart
   */
  reset() {
    this.gpr = [0, 0, 0, 0];
    this.sp = MAX_SP;

    this.ip = 0;
    this.zero = false;
    this.carry = false;
    this.fault = false;
  }

  /**
   * On each CPU cycle, the next step is executed.
   *
   * Each step does only execute one single instruction.
   */
  step() {
    if (this.fault) {
      throw new Error('FAULT. Reset the CPU to continue.');
    }

    try {
      if (this.ip < 0 || this.ip >= this.memory.data.length) {
        throw new Error('Instruction pointer is outside of memory');
      }
      let regTo: number,
        regFrom: number,
        memFrom: number,
        memTo: number,
        num: number;

      // load the instruction from memory at `this.ip` position
      const instr = this.memory.load(this.ip) as OPCodes;
      switch (instr) {
        case OPCodes.NONE:
          // noop operation, abort
          return false;
        case OPCodes.NOPE:
          // do nothing
          this.ip++;
          break;
        case OPCodes.MOV_REG_TO_REG:
          // move the value from `regFrom` to `regTo`
          // move regTo regFrom
          regTo = this.checkGPR_SP(this.memory.load(++this.ip));
          regFrom = this.checkGPR_SP(this.memory.load(++this.ip));
          this.setGPR_SP(regTo, this.getGPR_SP(regFrom));
          this.ip++;
          break;

        case OPCodes.MOV_ADDRESS_TO_REG:
          // move the value from `memFrom` to `regTo`
          // move regTo memFrom
          regTo = this.checkGPR_SP(this.memory.load(++this.ip));
          memFrom = this.memory.load(++this.ip);
          this.setGPR_SP(regTo, this.memory.load(memFrom));
          this.ip++;
          break;

        case OPCodes.MOV_REGADDRESS_TO_REG:
          regTo = this.checkGPR_SP(this.memory.load(++this.ip));
          regFrom = this.memory.load(++this.ip);
          this.setGPR_SP(
            regTo,
            this.memory.load(this.indirectRegisterAddress(regFrom))
          );
          this.ip++;
          break;
        case OPCodes.MOV_REG_TO_ADDRESS:
          memTo = this.memory.load(++this.ip);
          regFrom = this.checkGPR_SP(this.memory.load(++this.ip));
          this.memory.store(memTo, this.getGPR_SP(regFrom));
          this.ip++;
          break;
        case OPCodes.MOV_REG_TO_REGADDRESS:
          regTo = this.memory.load(++this.ip);
          regFrom = this.checkGPR_SP(this.memory.load(++this.ip));
          this.memory.store(
            this.indirectRegisterAddress(regTo),
            this.getGPR_SP(regFrom)
          );
          this.ip++;
          break;
        case OPCodes.MOV_NUMBER_TO_REG:
          regTo = this.checkGPR_SP(this.memory.load(++this.ip));
          num = this.memory.load(++this.ip);
          this.setGPR_SP(regTo, num);
          this.ip++;
          break;
        case OPCodes.MOV_NUMBER_TO_ADDRESS:
          memTo = this.memory.load(++this.ip);
          num = this.memory.load(++this.ip);
          this.memory.store(memTo, num);
          this.ip++;
          break;
        case OPCodes.MOV_NUMBER_TO_REGADDRESS:
          regTo = this.memory.load(++this.ip);
          num = this.memory.load(++this.ip);
          this.memory.store(this.indirectRegisterAddress(regTo), num);
          this.ip++;
          break;
        case OPCodes.ADD_REG_TO_REG:
          regTo = this.checkGPR_SP(this.memory.load(++this.ip));
          regFrom = this.checkGPR_SP(this.memory.load(++this.ip));
          this.setGPR_SP(
            regTo,
            this.checkOperation(this.getGPR_SP(regTo) + this.getGPR_SP(regFrom))
          );
          this.ip++;
          break;
        case OPCodes.ADD_REGADDRESS_TO_REG:
          regTo = this.checkGPR_SP(this.memory.load(++this.ip));
          regFrom = this.memory.load(++this.ip);
          this.setGPR_SP(
            regTo,
            this.checkOperation(
              this.getGPR_SP(regTo) +
                this.memory.load(this.indirectRegisterAddress(regFrom))
            )
          );
          this.ip++;
          break;
        case OPCodes.ADD_ADDRESS_TO_REG:
          regTo = this.checkGPR_SP(this.memory.load(++this.ip));
          memFrom = this.memory.load(++this.ip);
          this.setGPR_SP(
            regTo,
            this.checkOperation(
              this.getGPR_SP(regTo) + this.memory.load(memFrom)
            )
          );
          this.ip++;
          break;
        case OPCodes.ADD_NUMBER_TO_REG:
          regTo = this.checkGPR_SP(this.memory.load(++this.ip));
          num = this.memory.load(++this.ip);
          this.setGPR_SP(
            regTo,
            this.checkOperation(this.getGPR_SP(regTo) + num)
          );
          this.ip++;
          break;
        case OPCodes.SUB_REG_FROM_REG:
          regTo = this.checkGPR_SP(this.memory.load(++this.ip));
          regFrom = this.checkGPR_SP(this.memory.load(++this.ip));
          this.setGPR_SP(
            regTo,
            this.checkOperation(this.getGPR_SP(regTo) - this.gpr[regFrom])
          );
          this.ip++;
          break;
        case OPCodes.SUB_REGADDRESS_FROM_REG:
          regTo = this.checkGPR_SP(this.memory.load(++this.ip));
          regFrom = this.memory.load(++this.ip);
          this.setGPR_SP(
            regTo,
            this.checkOperation(
              this.getGPR_SP(regTo) -
                this.memory.load(this.indirectRegisterAddress(regFrom))
            )
          );
          this.ip++;
          break;
        case OPCodes.SUB_ADDRESS_FROM_REG:
          regTo = this.checkGPR_SP(this.memory.load(++this.ip));
          memFrom = this.memory.load(++this.ip);
          this.setGPR_SP(
            regTo,
            this.checkOperation(
              this.getGPR_SP(regTo) - this.memory.load(memFrom)
            )
          );
          this.ip++;
          break;
        case OPCodes.SUB_NUMBER_FROM_REG:
          regTo = this.checkGPR_SP(this.memory.load(++this.ip));
          num = this.memory.load(++this.ip);
          this.setGPR_SP(
            regTo,
            this.checkOperation(this.getGPR_SP(regTo) - num)
          );
          this.ip++;
          break;
        case OPCodes.INC_REG:
          regTo = this.checkGPR_SP(this.memory.load(++this.ip));
          this.setGPR_SP(regTo, this.checkOperation(this.getGPR_SP(regTo) + 1));
          this.ip++;
          break;
        case OPCodes.DEC_REG:
          regTo = this.checkGPR_SP(this.memory.load(++this.ip));
          this.setGPR_SP(regTo, this.checkOperation(this.getGPR_SP(regTo) - 1));
          this.ip++;
          break;
        case OPCodes.CMP_REG_WITH_REG:
          regTo = this.checkGPR_SP(this.memory.load(++this.ip));
          regFrom = this.checkGPR_SP(this.memory.load(++this.ip));
          this.checkOperation(this.getGPR_SP(regTo) - this.getGPR_SP(regFrom));
          this.ip++;
          break;
        case OPCodes.CMP_REGADDRESS_WITH_REG:
          regTo = this.checkGPR_SP(this.memory.load(++this.ip));
          regFrom = this.memory.load(++this.ip);
          this.checkOperation(
            this.getGPR_SP(regTo) -
              this.memory.load(this.indirectRegisterAddress(regFrom))
          );
          this.ip++;
          break;
        case OPCodes.CMP_ADDRESS_WITH_REG:
          regTo = this.checkGPR_SP(this.memory.load(++this.ip));
          memFrom = this.memory.load(++this.ip);
          this.checkOperation(
            this.getGPR_SP(regTo) - this.memory.load(memFrom)
          );
          this.ip++;
          break;
        case OPCodes.CMP_NUMBER_WITH_REG:
          regTo = this.checkGPR_SP(this.memory.load(++this.ip));
          num = this.memory.load(++this.ip);
          this.checkOperation(this.getGPR_SP(regTo) - num);
          this.ip++;
          break;
        case OPCodes.JMP_REGADDRESS:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          this.jump(this.gpr[regTo]);
          break;
        case OPCodes.JMP_ADDRESS:
          num = this.memory.load(++this.ip);
          this.jump(num);
          break;
        case OPCodes.JC_REGADDRESS:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          if (this.carry) {
            this.jump(this.gpr[regTo]);
          } else {
            this.ip++;
          }
          break;
        case OPCodes.JC_ADDRESS:
          num = this.memory.load(++this.ip);
          if (this.carry) {
            this.jump(num);
          } else {
            this.ip++;
          }
          break;
        case OPCodes.JNC_REGADDRESS:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          if (!this.carry) {
            this.jump(this.gpr[regTo]);
          } else {
            this.ip++;
          }
          break;
        case OPCodes.JNC_ADDRESS:
          num = this.memory.load(++this.ip);
          if (!this.carry) {
            this.jump(num);
          } else {
            this.ip++;
          }
          break;
        case OPCodes.JZ_REGADDRESS:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          if (this.zero) {
            this.jump(this.gpr[regTo]);
          } else {
            this.ip++;
          }
          break;
        case OPCodes.JZ_ADDRESS:
          num = this.memory.load(++this.ip);
          if (this.zero) {
            this.jump(num);
          } else {
            this.ip++;
          }
          break;
        case OPCodes.JNZ_REGADDRESS:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          if (!this.zero) {
            this.jump(this.gpr[regTo]);
          } else {
            this.ip++;
          }
          break;
        case OPCodes.JNZ_ADDRESS:
          num = this.memory.load(++this.ip);
          if (!this.zero) {
            this.jump(num);
          } else {
            this.ip++;
          }
          break;
        case OPCodes.JA_REGADDRESS:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          if (!this.zero && !this.carry) {
            this.jump(this.gpr[regTo]);
          } else {
            this.ip++;
          }
          break;
        case OPCodes.JA_ADDRESS:
          num = this.memory.load(++this.ip);
          if (!this.zero && !this.carry) {
            this.jump(num);
          } else {
            this.ip++;
          }
          break;
        case OPCodes.JNA_REGADDRESS: // JNA REG
          regTo = this.checkGPR(this.memory.load(++this.ip));
          if (this.zero || this.carry) {
            this.jump(this.gpr[regTo]);
          } else {
            this.ip++;
          }
          break;
        case OPCodes.JNA_ADDRESS:
          num = this.memory.load(++this.ip);
          if (this.zero || this.carry) {
            this.jump(num);
          } else {
            this.ip++;
          }
          break;
        case OPCodes.PUSH_REG:
          regFrom = this.checkGPR(this.memory.load(++this.ip));
          this.push(this.gpr[regFrom]);
          this.ip++;
          break;
        case OPCodes.PUSH_REGADDRESS:
          regFrom = this.memory.load(++this.ip);
          this.push(this.memory.load(this.indirectRegisterAddress(regFrom)));
          this.ip++;
          break;
        case OPCodes.PUSH_ADDRESS:
          memFrom = this.memory.load(++this.ip);
          this.push(this.memory.load(memFrom));
          this.ip++;
          break;
        case OPCodes.PUSH_NUMBER:
          num = this.memory.load(++this.ip);
          this.push(num);
          this.ip++;
          break;
        case OPCodes.POP_REG:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          this.gpr[regTo] = this.pop();
          this.ip++;
          break;
        case OPCodes.CALL_REGADDRESS:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          this.push(this.ip + 1);
          this.jump(this.gpr[regTo]);
          break;
        case OPCodes.CALL_ADDRESS:
          num = this.memory.load(++this.ip);
          this.push(this.ip + 1);
          this.jump(num);
          break;
        case OPCodes.RET:
          this.jump(this.pop());
          break;
        case OPCodes.MUL_REG: // A = A * REG
          regFrom = this.checkGPR(this.memory.load(++this.ip));
          this.gpr[0] = this.checkOperation(this.gpr[0] * this.gpr[regFrom]);
          this.ip++;
          break;
        case OPCodes.MUL_REGADDRESS: // A = A * [REG]
          regFrom = this.memory.load(++this.ip);
          this.gpr[0] = this.checkOperation(
            this.gpr[0] *
              this.memory.load(this.indirectRegisterAddress(regFrom))
          );
          this.ip++;
          break;
        case OPCodes.MUL_ADDRESS: // A = A * [NUMBER]
          memFrom = this.memory.load(++this.ip);
          this.gpr[0] = this.checkOperation(
            this.gpr[0] * this.memory.load(memFrom)
          );
          this.ip++;
          break;
        case OPCodes.MUL_NUMBER: // A = A * NUMBER
          num = this.memory.load(++this.ip);
          this.gpr[0] = this.checkOperation(this.gpr[0] * num);
          this.ip++;
          break;
        case OPCodes.DIV_REG: // A = A / REG
          regFrom = this.checkGPR(this.memory.load(++this.ip));
          this.gpr[0] = this.checkOperation(this.division(this.gpr[regFrom]));
          this.ip++;
          break;
        case OPCodes.DIV_REGADDRESS: // A = A / [REG]
          regFrom = this.memory.load(++this.ip);
          this.gpr[0] = this.checkOperation(
            this.division(
              this.memory.load(this.indirectRegisterAddress(regFrom))
            )
          );
          this.ip++;
          break;
        case OPCodes.DIV_ADDRESS: // A = A / [NUMBER]
          memFrom = this.memory.load(++this.ip);
          this.gpr[0] = this.checkOperation(
            this.division(this.memory.load(memFrom))
          );
          this.ip++;
          break;
        case OPCodes.DIV_NUMBER: // A = A / NUMBER
          num = this.memory.load(++this.ip);
          this.gpr[0] = this.checkOperation(this.division(num));
          this.ip++;
          break;
        case OPCodes.AND_REG_WITH_REG:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          regFrom = this.checkGPR(this.memory.load(++this.ip));
          this.gpr[regTo] = this.checkOperation(
            this.gpr[regTo] & this.gpr[regFrom]
          );
          this.ip++;
          break;
        case OPCodes.AND_REGADDRESS_WITH_REG:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          regFrom = this.memory.load(++this.ip);
          this.gpr[regTo] = this.checkOperation(
            this.gpr[regTo] &
              this.memory.load(this.indirectRegisterAddress(regFrom))
          );
          this.ip++;
          break;
        case OPCodes.AND_ADDRESS_WITH_REG:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          memFrom = this.memory.load(++this.ip);
          this.gpr[regTo] = this.checkOperation(
            this.gpr[regTo] & this.memory.load(memFrom)
          );
          this.ip++;
          break;
        case OPCodes.AND_NUMBER_WITH_REG:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          num = this.memory.load(++this.ip);
          this.gpr[regTo] = this.checkOperation(this.gpr[regTo] & num);
          this.ip++;
          break;
        case OPCodes.OR_REG_WITH_REG:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          regFrom = this.checkGPR(this.memory.load(++this.ip));
          this.gpr[regTo] = this.checkOperation(
            this.gpr[regTo] | this.gpr[regFrom]
          );
          this.ip++;
          break;
        case OPCodes.OR_REGADDRESS_WITH_REG:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          regFrom = this.memory.load(++this.ip);
          this.gpr[regTo] = this.checkOperation(
            this.gpr[regTo] |
              this.memory.load(this.indirectRegisterAddress(regFrom))
          );
          this.ip++;
          break;
        case OPCodes.OR_ADDRESS_WITH_REG:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          memFrom = this.memory.load(++this.ip);
          this.gpr[regTo] = this.checkOperation(
            this.gpr[regTo] | this.memory.load(memFrom)
          );
          this.ip++;
          break;
        case OPCodes.OR_NUMBER_WITH_REG:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          num = this.memory.load(++this.ip);
          this.gpr[regTo] = this.checkOperation(this.gpr[regTo] | num);
          this.ip++;
          break;
        case OPCodes.XOR_REG_WITH_REG:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          regFrom = this.checkGPR(this.memory.load(++this.ip));
          this.gpr[regTo] = this.checkOperation(
            this.gpr[regTo] ^ this.gpr[regFrom]
          );
          this.ip++;
          break;
        case OPCodes.XOR_REGADDRESS_WITH_REG:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          regFrom = this.memory.load(++this.ip);
          this.gpr[regTo] = this.checkOperation(
            this.gpr[regTo] ^
              this.memory.load(this.indirectRegisterAddress(regFrom))
          );
          this.ip++;
          break;
        case OPCodes.XOR_ADDRESS_WITH_REG:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          memFrom = this.memory.load(++this.ip);
          this.gpr[regTo] = this.checkOperation(
            this.gpr[regTo] ^ this.memory.load(memFrom)
          );
          this.ip++;
          break;
        case OPCodes.XOR_NUMBER_WITH_REG:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          num = this.memory.load(++this.ip);
          this.gpr[regTo] = this.checkOperation(this.gpr[regTo] ^ num);
          this.ip++;
          break;
        case OPCodes.NOT_REG:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          this.gpr[regTo] = this.checkOperation(~this.gpr[regTo]);
          this.ip++;
          break;
        case OPCodes.SHL_REG_WITH_REG:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          regFrom = this.checkGPR(this.memory.load(++this.ip));
          this.gpr[regTo] = this.checkOperation(
            this.gpr[regTo] << this.gpr[regFrom]
          );
          this.ip++;
          break;
        case OPCodes.SHL_REGADDRESS_WITH_REG:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          regFrom = this.memory.load(++this.ip);
          this.gpr[regTo] = this.checkOperation(
            this.gpr[regTo] <<
              this.memory.load(this.indirectRegisterAddress(regFrom))
          );
          this.ip++;
          break;
        case OPCodes.SHL_ADDRESS_WITH_REG:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          memFrom = this.memory.load(++this.ip);
          this.gpr[regTo] = this.checkOperation(
            this.gpr[regTo] << this.memory.load(memFrom)
          );
          this.ip++;
          break;
        case OPCodes.SHL_NUMBER_WITH_REG:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          num = this.memory.load(++this.ip);
          this.gpr[regTo] = this.checkOperation(this.gpr[regTo] << num);
          this.ip++;
          break;
        case OPCodes.SHR_REG_WITH_REG:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          regFrom = this.checkGPR(this.memory.load(++this.ip));
          this.gpr[regTo] = this.checkOperation(
            this.gpr[regTo] >>> this.gpr[regFrom]
          );
          this.ip++;
          break;
        case OPCodes.SHR_REGADDRESS_WITH_REG:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          regFrom = this.memory.load(++this.ip);
          this.gpr[regTo] = this.checkOperation(
            this.gpr[regTo] >>>
              this.memory.load(this.indirectRegisterAddress(regFrom))
          );
          this.ip++;
          break;
        case OPCodes.SHR_ADDRESS_WITH_REG:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          memFrom = this.memory.load(++this.ip);
          this.gpr[regTo] = this.checkOperation(
            this.gpr[regTo] >>> this.memory.load(memFrom)
          );
          this.ip++;
          break;
        case OPCodes.SHR_NUMBER_WITH_REG:
          regTo = this.checkGPR(this.memory.load(++this.ip));
          num = this.memory.load(++this.ip);
          this.gpr[regTo] = this.checkOperation(this.gpr[regTo] >>> num);
          this.ip++;
          break;
        default:
          break;
      }
      return true;
    } catch (error) {
      this.fault = true;
      throw error;
    }
  }

  /**
   * ensure the register index valid
   * @param regIndex
   * @returns
   */
  private checkGPR(regIndex: number) {
    if (regIndex < 0 || regIndex >= this.gpr.length) {
      throw new Error(`Invalid register index: ${regIndex}`);
    }

    return regIndex;
  }

  /**
   * ensure the register index valid
   * @param regIndex
   * @returns
   */
  private checkGPR_SP(regIndex: number) {
    if (regIndex < 0 || regIndex >= this.gpr.length + 1) {
      throw new Error(`Invalid register index: ${regIndex}`);
    }

    return regIndex;
  }

  private setGPR_SP(reg: number, value: number) {
    if (reg >= 0 && reg < this.gpr.length) {
      this.gpr[reg] = value;
      return;
    }

    if (reg === this.gpr.length) {
      this.sp = value;
      // Not likely to happen, since we always get here after checkOpertion().
      if (this.sp < MIN_SP) {
        throw new Error('Stack overflow');
      }

      if (this.sp > MAX_SP) {
        throw new Error('Stack underflow');
      }

      return;
    }

    throw new Error(`Invalid register: ${reg};`);
  }

  private getGPR_SP(reg: number) {
    if (reg >= 0 && reg < this.gpr.length) {
      return this.gpr[reg];
    }

    if (reg === this.gpr.length) {
      return this.sp;
    }

    throw new Error(`Invalid register: ${reg};`);
  }

  private indirectRegisterAddress(value: number) {
    const reg = value % 8;

    let base: number;
    if (reg < this.gpr.length) {
      base = this.gpr[reg];
    } else {
      base = this.sp;
    }

    let offset = Math.floor(value / 8);
    if (offset > 15) {
      offset = offset - 32;
    }

    return base + offset;
  }

  private checkOperation(value: number) {
    let zero = false;
    let carry = false;

    if (value >= 256) {
      carry = true;
      value = value % 256;
    } else if (value === 0) {
      zero = true;
    } else if (value < 0) {
      carry = true;
      value = 255 - (-value % 256);
    }
    this.carry = carry;
    this.zero = zero;
    return value;
  }

  private jump(newIP: number) {
    this.memory.checkAddress(newIP);

    this.ip = newIP;
  }

  private push(value: number) {
    this.memory.store(this.sp--, value);
    if (this.sp < MIN_SP) {
      throw new Error('Stack overflow');
    }
  }

  private pop(): number {
    const value = this.memory.load(++this.sp);
    if (this.sp > MAX_SP) {
      throw new Error('Stack underflow');
    }
    return value;
  }

  private division(divisor: number) {
    if (divisor === 0) {
      throw new Error('Division by 0');
    }
    return Math.floor(this.gpr[0] / divisor);
  }
}
