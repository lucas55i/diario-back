import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"
import { User } from "src/users/interface/user.interface"

export class CriarPostDto {
    @ApiProperty({
        description: "Autor do texto, herda do USER",
        example: "Lucas",
    })
    @IsString()
    @IsNotEmpty()
    author: User

    @ApiProperty({
        description: "Conteúdo do testo",
        example: "Conteúdo de Teste",
    })
    @IsString()
    @IsNotEmpty()
    conteudo: string
}
