import { User } from "src/auth/models/usar.class";

export interface FeedPost {
    id?: number;
    body?: string;
    createdAt?: Date;
    author?: User;
}