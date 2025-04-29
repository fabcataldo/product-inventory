import { Injectable } from '@angular/core';
import { operationTypes } from 'src/helpers/dummy-data';
import { OperationType } from '../../interfaces/operation-type.interface';
import { Observable, of, delay, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OperationsService {
  constructor() {}
  getOperations(): Observable<OperationType[]> {
    return of(operationTypes).pipe(
      delay(1000),
      switchMap((operations: OperationType[]) => {
        return of(operations);
      })
    );
  }
}
