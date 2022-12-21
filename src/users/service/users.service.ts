import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CriarUserDto } from '../dtos/criar-user.dto';
import { User } from '../interface/user.interface';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel('Users') private readonly userModel: Model<User>
  ) { }

  async consultarUsuarios(): Promise<Array<User>> {
    return await this.userModel.find().exec()
  }

  async criarUsuario(criaUserDto: CriarUserDto): Promise<User> {
    const { nome } = criaUserDto;

    const usuarioEncontrado = await this.userModel.findOne({ nome }).exec();

    if (usuarioEncontrado) {
      throw new BadRequestException(`Usuarios com nome ${nome} já cadastrado`)
    }
    const jogadorCriado = new this.userModel(criaUserDto);
    return await jogadorCriado.save();

  }
}
