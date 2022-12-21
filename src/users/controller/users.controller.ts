import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EnumApiTags } from 'src/common/enums/api-tags';
import { CriarUserDto } from '../dtos/criar-user.dto';
import { User } from '../interface/user.interface';
import { UsersService } from '../service/users.service';

@Controller('api/v1/users')
@ApiTags(EnumApiTags.USERS)
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
