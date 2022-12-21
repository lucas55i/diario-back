import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EnumApiTags } from 'src/common/enums/api-tags';
import { ValidacaoParametrosPipe } from 'src/common/pipe/validacao-parametros.pipe';
import { CriarUserDto } from '../dtos/criar-user.dto';
import { User } from '../interface/user.interface';
import { UsersService } from '../service/users.service';

@Controller('api/v1/users')
@ApiTags(EnumApiTags.USERS)
export class UsersController {

    constructor(private readonly userService: UsersService) { }

    @Get()
    async consultarUsuarios(): Promise<Array<User>> {
        return this.userService.consultarUsuarios()
    }

    @Get('/:_id')
    async consultarUsuarioPeloId(
        @Param('_id', ValidacaoParametrosPipe) _id: string): Promise<User> {
        return await this.userService.consultarUsuarioPeloId(_id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    async criarCategoria(@Body() criaUserDto: CriarUserDto): Promise<User> {
        return await this.userService.criarUsuario(criaUserDto)
    }
}
