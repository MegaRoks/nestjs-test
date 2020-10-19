import { Module } from '@nestjs/common';

import { DatabaseModule } from './modules/database/database.module';
import { ThankModule } from './modules/thank/thank.module';
import { UserModule } from './modules/user/user.module';

@Module({
    imports: [DatabaseModule, ThankModule, UserModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
