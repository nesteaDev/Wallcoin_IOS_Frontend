export enum AccountType {
  PERSONAL = 'Personal',
  BUSINESS = 'Business',
}

export default class Account {
  idAccount?: string;
  accountNumber?: string;
  balance?: number;
  idUser?: string;
  accountType?: AccountType;
  createdAt?: Date;
  updatedAt?: Date;
}
