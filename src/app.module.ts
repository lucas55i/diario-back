import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot(
    'mongodb://root:example@localhost:27017',
  )
    ,PostsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
