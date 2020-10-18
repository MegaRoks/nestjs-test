import { Module } from '@nestjs/common';

import { ThankService } from './thank.service';
import { ThankController } from './thank.controller';

@Module({
    providers: [ThankService],
    controllers: [ThankController],
})
export class ThankModule {}
