import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CriarPostDto } from '../dtos/criar-post.dto';
import { Posts } from '../interface/post.interface';

@Injectable()
export class PostsService {

    constructor(
        @InjectModel('Posts') private readonly postsModel: Model<Posts>
    ) { }

    async consultarPosts(): Promise<Array<Posts>> {
        return await this.postsModel.find().exec()
    }

    async criarPost(criarPostDto: CriarPostDto): Promise<Posts> {
        const { author } = criarPostDto;

        const usuarioEncontrado = await this.postsModel.findOne({ author }).exec();

        if (!usuarioEncontrado) {
            throw new BadRequestException(`Autor com nome: ${author} não encontrado`)
        }
        const jogadorCriado = new this.postsModel(criarPostDto);
        return await jogadorCriado.save();
    }
}
