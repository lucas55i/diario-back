import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './controller/users.controller';
import { UserSchema } from './schema/user.schema';
import { UsersService } from './service/users.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }]), UsersModule],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {}
