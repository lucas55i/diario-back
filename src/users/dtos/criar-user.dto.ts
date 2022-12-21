import { IsNotEmpty, IsString } from "class-validator"

export class CriarUserDto{
    @IsString()
    @IsNotEmpty()
    nome: string
}
