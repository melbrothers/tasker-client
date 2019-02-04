import {IUser} from './user';

export class User implements IUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  created_at: string;
  locale: string;
}