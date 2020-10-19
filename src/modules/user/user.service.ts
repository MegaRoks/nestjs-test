import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './entity/user.entity';
import { UserRepository } from './repository/user.repository';
import { CreateUserDTO } from './dto/createUser.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserRepository) private readonly userRepository: UserRepository) {}

    public async createUser(createUserDTO: CreateUserDTO): Promise<User> {
        return await this.userRepository.createUser(createUserDTO);
    }
}
