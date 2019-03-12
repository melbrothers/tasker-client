import {IUser} from './user';
import {Review} from './review.model';

export class User implements IUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  created_at: string;
  average_rating: number;
  sender_review_statistics: Review;
  locale: string;
}
