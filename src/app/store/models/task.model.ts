import { Bid } from 'app/store/models/bid.model';
import { User } from 'app/store/models/user.model';

export class Task {
    id: number;
    name: string;
    slug: string;
    description: string;
    deadline: string;
    created_at: number;
    price: number;
    bids: Array<Bid>;
    user: User;
    specified_times: {
      morning: boolean,
      midday: boolean,
      afternoon: boolean,
      evening: boolean
    };
}
