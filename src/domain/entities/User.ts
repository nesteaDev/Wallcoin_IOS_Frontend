import Account from './Account';
import { Transaction } from './transaction';


export interface User {
  idUser: string;
  name: string;
  email: string;
  accounts?: Account[];
  transactions?: Transaction[];
  urlImage: string;
}
