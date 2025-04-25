import { OperationType } from './operation-type.interface';

export interface Operation {
  id: number;
  operationType: OperationType;
  description: string;
  timestamp: string;
}
