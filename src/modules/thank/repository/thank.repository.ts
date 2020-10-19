import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';

import { Thank } from './../entity/thank.entity';
import { CreateThankDTO } from './../dto/createThank.dto';

@EntityRepository(Thank)
export class ThankRepository extends Repository<Thank> {
    public async createThank(createThankDTO: CreateThankDTO): Promise<Thank> {
        const thank = this.create(createThankDTO);
        await this.createQueryBuilder()
            .insert()
            .into(Thank)
            .values(thank)
            .execute()
            .catch(err => {
                console.error(err);

                throw new InternalServerErrorException('Error while saving user to database');
            });

        return thank;
    }
}
