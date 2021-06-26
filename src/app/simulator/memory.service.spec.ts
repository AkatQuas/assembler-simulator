import { TestBed } from '@angular/core/testing';
import { MemoryService } from './memory.service';

function insertValue(service: MemoryService, counts = 100) {
  for (let index = 0; index < counts; index++) {
    const value = Math.random();
    const index = ~~(Math.random() * service.data.length);
    service.store(index, value);
  }
}

describe('MemoryService', () => {
  let service: MemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoryService);
    service.reset();
  });

  it('should be created with capacity of 256', () => {
    expect(service).toBeTruthy();
    expect(service.data.length).toBe(256);
  });

  it('should raise error when indexing out of range', () => {
    expect(service.load.bind(service, -10)).toThrowError(
      /Memory access violation at/
    );
    expect(service.load.bind(service, -1)).toThrowError(
      /Memory access violation at/
    );
    expect(service.load.bind(service, 256)).toThrowError(
      /Memory access violation at/
    );
    expect(service.load.bind(service, 266)).toThrowError(
      /Memory access violation at/
    );
  });

  it('should raise error when saving data at out-of-range index', () => {
    expect(service.store.bind(service, -10, 0)).toThrowError(
      /Memory access violation at/
    );
    expect(service.store.bind(service, -1, 0)).toThrowError(
      /Memory access violation at/
    );
    expect(service.store.bind(service, 256, 0)).toThrowError(
      /Memory access violation at/
    );
    expect(service.store.bind(service, 266, 0)).toThrowError(
      /Memory access violation at/
    );
  });

  it('should save data', () => {
    const value = Math.random();
    const index = ~~(Math.random() * service.data.length);
    service.store(index, value);
    expect(service.lastAccess).toBe(index);
    expect(service.load(index)).toBe(value);
  });

  it('should load data', () => {
    insertValue(service);
    const index = ~~(Math.random() * service.data.length);
    const value = service.data[index];
    expect(service.load(index)).toBe(value);
    expect(service.lastAccess).toBe(index);
  });

  it('should reset store', () => {
    insertValue(service);
    service.reset();
    expect(service.lastAccess).toBe(-1);
    for (let index = 0; index < service.data.length; index++) {
      expect(service.data[index]).toBe(0);
    }
  });
});
