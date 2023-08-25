import Account from '../../entities/Account';

export interface CreateUserRequestDto {
  name: string | undefined | null;
  email: string | undefined | null;
  urlImage: string | undefined | null;
  accounts?: Account[];
}
