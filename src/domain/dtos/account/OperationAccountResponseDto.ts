import { TransactionType } from '../../entities/transaction';

export interface OperationAccountResponseDto {
  numberAccountOrigin: string;
  nameAccountOrigin: string;
  numberAccountDestination: string;
  nameAccountDestination: string;
  amount: number;
  balance: number;
  transactionType: TransactionType;
  createdAt: Date;
}
