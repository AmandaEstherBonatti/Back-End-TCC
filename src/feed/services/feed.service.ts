import { FeedPostEntity } from './../models/post.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { FeedPost } from '../models/post.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class FeedService {

    constructor(
        @InjectRepository(FeedPostEntity)
        private readonly feedPostRepository: Repository<FeedPostEntity>) { }

    createPost(feelPost: FeedPost): Observable<FeedPost> {
        return from(this.feedPostRepository.save(feelPost));
    }

    findAllPosts(): Observable<FeedPost[]> {
        return from(this.feedPostRepository.find());
    }

    findPosts(take: number = 10, skip: number = 0): Observable<FeedPost[]> {
        return from(this.feedPostRepository.findAndCount({ take, skip }).then(([posts]) => {
            return <FeedPost[]>posts
        }))
    }

    updatePost(id: number, feedPost: FeedPost): Observable<UpdateResult> {
        return from(this.feedPostRepository.update(id, feedPost));
    }

    deletePost(id: number): Observable<DeleteResult> {
        return from(this.feedPostRepository.delete(id));
    }

}
