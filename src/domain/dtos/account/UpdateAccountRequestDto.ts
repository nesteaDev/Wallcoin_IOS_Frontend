import { AccountType } from '../../entities/Account';

export interface UpdateAccountRequestDto {
  accountNumber: string;
  accountType: AccountType;
  createdAt?: Date;
  updateAt?: Date;
}
