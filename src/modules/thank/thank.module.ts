import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ThankRepository } from './repository/thank.repository';
import { ThankService } from './thank.service';
import { ThankController } from './thank.controller';


@Module({
    imports: [TypeOrmModule.forFeature([ThankRepository])],
    providers: [ThankService],
    controllers: [ThankController],
})
export class ThankModule {}
