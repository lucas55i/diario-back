import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CriarPostDto {
    @ApiProperty({
        description: "Autor do texto, herda do USER",
        example: "Lucas",
    })
    @IsString()
    @IsNotEmpty()
    readonly author: string

    @ApiProperty({
        description: "Conteúdo do testo",
        example: "Conteúdo de Teste",
    })
    @IsString()
    @IsNotEmpty()
    conteudo: string
}
