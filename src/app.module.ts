import { Module } from '@nestjs/common';

import { DatabaseModule } from './modules/database/database.module';
import { ThankModule } from './modules/thank/thank.module';

@Module({
    imports: [DatabaseModule, ThankModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
