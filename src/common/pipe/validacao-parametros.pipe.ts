import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class ValidacaoParametrosPipe implements PipeTransform{

    transform(value: any, metadata: ArgumentMetadata) {

        if(!value){
            throw new BadRequestException(`O valor do parametro ${metadata.data} deve ser informado`)
        }
        console.log(`value: ${value} metadata: ${metadata.data}`);
        return value
    }
}