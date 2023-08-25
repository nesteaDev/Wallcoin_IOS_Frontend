import { TransactionType } from '../../entities/transaction';

export interface CreateTransactionRequestDto {
  idUser: string;
  idDestinationUser: string;
  amount: number;
  transactionType: TransactionType;
  createdAt?: Date;
}
