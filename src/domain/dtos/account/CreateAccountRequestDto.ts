export interface CreateAccountRequestDto {
  idUser?: string;
  accountNumber: string;
  accountType: string;
  createdAt?: Date;
}
