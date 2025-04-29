import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { OperationsService } from './operations.service';
import { operationTypes } from 'src/helpers/dummy-data';
import { OperationType } from '../../interfaces/operation-type.interface';

describe('OperationsService', () => {
  let service: OperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [OperationsService] });
    service = TestBed.inject(OperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return operation types', fakeAsync(() => {
    let result: OperationType[] | undefined;
    service.getOperations().subscribe((data) => (result = data));
    expect(result).toBeUndefined();
    tick(1000);
    expect(result).toEqual(operationTypes);
  }));
});
