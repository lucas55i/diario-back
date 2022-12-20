import { IsNotEmpty, IsString } from "class-validator"

export class CriarPostDto{
    @IsString()
    @IsNotEmpty()
    author: string

    @IsString()
    @IsNotEmpty()
    conteudo: string
}