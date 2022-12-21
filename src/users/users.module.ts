import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from 'src/posts/posts.module';
import { UserSchema } from './schema/user.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Posts', schema: UserSchema }]), PostsModule],

})
export class UsersModule {
}
