import { IsNotEmpty, IsString } from "class-validator"
import { User } from "src/users/interface/user.interface"

export class CriarPostDto {
    @IsString()
    @IsNotEmpty()
    author: User

    @IsString()
    @IsNotEmpty()
    conteudo: string
}
