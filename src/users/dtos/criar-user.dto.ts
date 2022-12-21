import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CriarUserDto {
    @ApiProperty({
        description: "Nome do usuário",
        example: "Lucas",
    })
    @IsString()
    @IsNotEmpty()
    nome: string
}
