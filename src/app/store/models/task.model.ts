import { Bid } from 'app/store/models/bid.model';
import { User } from 'app/store/models/user.model';
import {Comment} from './comment.model';

export class Task {
    id: number;
    name: string;
    slug: string;
    description: string;
    deadline: string;
    created_at: number;
    price: number;
    bids: Array<Bid>;
    sender: User;
    runner: User;
    state: string;
    comments: Comment[];
    location: {
      display_name: string;
      longitude: number;
      latitude: number;
    };
    specified_times: {
      morning: boolean,
      midday: boolean,
      afternoon: boolean,
      evening: boolean
    };
}
