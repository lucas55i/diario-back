import { Controller, Get } from '@nestjs/common';
import { PostsService } from '../service/posts.service';

@Controller('api/v1/posts')
export class PostsController {

    constructor(private readonly postService: PostsService){}


    @Get()
    async consultarPosts(){
        return this.postService.consultarPosts()
    }

}
