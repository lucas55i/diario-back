import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriarUserDto } from '../dtos/criar-user.dto';
import { User } from '../interface/user.interface';
import { UsersService } from '../service/users.service';

@Controller('api/v1/users')
export class UsersController {

    constructor(private readonly userService: UsersService){}


    @Get()
    async consultarUsuarios(): Promise<Array<User>>{
        return this.userService.consultarUsuarios()
    }

    @Post()
    @UsePipes(ValidationPipe)
    async criarCategoria(@Body() criaUserDto: CriarUserDto): Promise<User> {
        return await this.userService.criarUsuario(criaUserDto)
    }
}
