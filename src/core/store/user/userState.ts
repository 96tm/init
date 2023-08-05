export interface IAuthData {
  token: string;
  userId: null | number;
}

export const UserInitState: IAuthData = {
  token: '',
  userId: null,
};
