import { AccountInterface } from './AccountInterface';

export interface PersonInterface {
  id: number;
  username: string;
  name: string;
  account: AccountInterface;
  urlImage: string;
}
