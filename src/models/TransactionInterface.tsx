export type TransactionType = 'recharge' | 'received' | 'payment';

export interface Origin {
  id: number;
  username: string;
  name: string;
  urlImage: string;
}

export interface TransactionInterface {
  id: number;
  origin: Origin;
  date: string;
  amount: number;
  type: TransactionType | String;
}


