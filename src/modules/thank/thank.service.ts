import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Thank } from './entity/thank.entity';
import { ThankRepository } from './repository/thank.repository';
import { CreateThankDTO } from './dto/createThank.dto';

@Injectable()
export class ThankService {
    constructor(@InjectRepository(ThankRepository) private readonly thankRepository: ThankRepository) {}

    public async createThank(createThankDTO: CreateThankDTO): Promise<Thank> {
        return await this.thankRepository.createThank(createThankDTO);
    }
}
