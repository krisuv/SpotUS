export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export type ILoginUser = Omit<IUser, 'firstName' | 'lastName'>;