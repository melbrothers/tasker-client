import {User} from './user.model';

export class Bid {
    comments: Comment[];
    price: number;
    created_at: string;
    runner: User;
    accepted: boolean;
}
