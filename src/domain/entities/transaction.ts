export enum TransactionType {
  DEPOSIT = 'deposit',
  TRANSFER = 'transfer',
  PAYMENT_BILL = 'payment_bill',
}

export interface Transaction {
  idTransaction: string;
  idUser: string;
  idDestinationUser: string;
  amount: number;
  createdAt?: Date;
  transactionType: string;
}
