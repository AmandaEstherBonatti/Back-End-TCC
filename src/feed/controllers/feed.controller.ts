import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { FeedPost } from '../models/post.interface';
import { FeedService } from '../services/feed.service';

@Controller('feed')
export class FeedController {

    constructor(private feedService: FeedService) { }

    @Post()
    create(@Body() post: FeedPost) {
        return this.feedService.createPost(post)
    }

    /*@Get()
    findAll(): Observable<FeedPost[]> {
        return this.feedService.findAllPosts();
    }*/

    @Get()
    findSelected(@Query('take') take: number = 1, @Query('skip') skip: number = 1): Observable<FeedPost[]> {
        take = take > 20 ? 20 : take;
        return this.feedService.findPosts(take, skip);
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() feedPost: FeedPost,
    ): Observable<UpdateResult> {
        return this.feedService.updatePost(id, feedPost);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
        return this.feedService.deletePost(id);
    }
}
