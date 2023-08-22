import { NotificationInterface } from '../models/NotificationInterface';
import { PersonInterface } from '../models/PersonInterface';
import { TransactionInterface } from '../models/TransactionInterface';

export const PersonData: PersonInterface = {
  id: 1,
  username: 'Nestea_03924',
  name: 'Nestea Quiroga',
  account: {
    id: 1,
    accountNumber: '3102095353',
    balance: 845000.0,
    accountType: 'Ahorros',
    accountStatus: 'Activa',
    dateCreated: '2021-05-01',
    dateUpdated: '2021-05-01',
  },
  urlImage: '',
};

export const TransactionData: TransactionInterface[] = [
  {
    id: 1,
    origin: {
      id: 9,
      username: 'wallmart',
      name: 'Wallmart',
      urlImage: '',
    },
    date: '2023-08-08 11:00 AM',
    amount: 350.0,
    type: 'payment',
  },
  {
    id: 16,
    origin: {
      id: 14,
      username: 'Nestea_03924',
      name: 'Nestea Quiroga',
      urlImage: '',
    },
    date: '2023-08-08 11:00 AM',
    amount: 1000.0,
    type: 'recharge',
  },
  {
    id: 19,
    origin: {
      id: 10,
      username: 'Sofka_345',
      name: 'Sofka Technologies',
      urlImage: '',
    },
    date: '2023-08-08 11:00 AM',
    amount: 500.0,
    type: 'received',
  },
  {
    id: 19,
    origin: {
      id: 10,
      username: 'Sofka_345',
      name: 'Sofka Technologies',
      urlImage: '',
    },
    date: '2023-08-08 11:00 AM',
    amount: 500.0,
    type: '',
  },
];


  export const NotificationData: NotificationInterface[] = [
    {
      id: 1,
      message: 'Se ha realizado una transacción exitosa.',
      timestamp: '2023-08-10 09:30 AM',
    },
    {
      id: 2,
      message: 'Se ha realizado una transacción exitosa.',
      timestamp: '2023-08-10 09:30 AM',
    },
    {
      id: 3,
      message: 'Saldo insuficiente para completar la transacción.',
      timestamp: '2023-08-09 02:15 PM',
    },
    {
      id: 4,
      message: '¡Bienvenido! Tu cuenta de billetera virtual ha sido creada.',
      timestamp: '2023-08-08 11:00 AM',
    },
  ];

