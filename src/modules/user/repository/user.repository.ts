import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';

import { User } from '../entity/user.entity';
import { CreateUserDTO } from './../dto/createUser.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    public async createUser(createUserDTO: CreateUserDTO): Promise<User> {
        const user = this.create(createUserDTO);
        await this.createQueryBuilder()
            .insert()
            .into(User)
            .values(user)
            .execute()
            .catch(err => {
                console.error(err);

                throw new InternalServerErrorException('Error while saving user to database');
            });

        return user;
    }
}
