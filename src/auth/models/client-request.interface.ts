import { User } from "./usar.class";

export type ClientRequest_Status =
    | 'not-sent'
    | 'pending'
    | 'accepted'
    | 'declined'
    | 'waiting-for-current-user-response';

export interface ClientRequestStatus {
    status?: ClientRequest_Status;
}

export interface ClientRequest {
    id?: number;
    creator?: User;
    receiver?: User;
    status?: ClientRequest_Status;
}