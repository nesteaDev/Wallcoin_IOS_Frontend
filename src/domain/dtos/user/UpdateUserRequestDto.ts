import Account from '../../entities/Account';

export interface UpdateUserRequestDto {
  name?: string;
  email?: string;
  urlImage?: string;
  accounts?: Account[];
}
