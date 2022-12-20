import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Posts } from '../interface/post.interface';

@Injectable()
export class PostsService {
    
    constructor(
        @InjectModel('Posts') private readonly postsModel: Model<Posts>
    ){}

    async consultarPosts(){
        return await this.postsModel.find().exec()
    }

}
