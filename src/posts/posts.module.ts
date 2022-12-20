import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsController } from './controller/posts.controller';
import { PostSchema } from './schema/post.schema';
import { PostsService } from './service/posts.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Posts', schema: PostSchema }]), PostsModule],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
