import { TransactionType } from '../../entities/transaction';

export interface OperationAccountRequestDto {
  idAccount: string;
  idUser: string;
  destinationUser: string;
  amount: number;
  transactionType: TransactionType;
}
