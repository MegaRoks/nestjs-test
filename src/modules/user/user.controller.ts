import { Controller, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiTags, ApiBody } from '@nestjs/swagger';

import { User } from './entity/user.entity';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/createUser.dto';
import { createUserSchema } from './schema/createUser.schema';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private usersService: UserService) {}

    @Post('/create')
    @ApiOkResponse({
        type: User,
        description: 'The method for create users',
    })
    @ApiBody({ schema: createUserSchema })
    public async createUser(@Body() createUserDTO: CreateUserDTO): Promise<User> {
        return await this.usersService.createUser(createUserDTO);
    }
}
