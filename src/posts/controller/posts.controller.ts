import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EnumApiTags } from 'src/common/enums/api-tags';
import { CriarPostDto } from '../dtos/criar-post.dto';
import { Posts } from '../interface/post.interface';
import { PostsService } from '../service/posts.service';

@Controller('api/v1/posts')
@ApiTags(EnumApiTags.POSTS)
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get()
  async consultarPosts() {
    return this.postService.consultarPosts();
  }

  @Post()
  @UsePipes(ValidationPipe)
  async criarPost(@Body() criarPostDto: CriarPostDto): Promise<Posts> {
    return await this.postService.criarPost(criarPostDto);
  }
}
