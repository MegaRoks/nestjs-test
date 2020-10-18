import { Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('thank')
@Controller('thank')
export class ThankController {
    @Get('/list')
    @ApiOkResponse({
        description: 'The method have to return a list of thanks',
    })
    public getThanksList() {
        return { test: 'working' };
    }

    @Post('/add')
    @ApiOkResponse({
        description: 'The method for add thanks for user',
    })
    public async addThank() {
        return { test: 'working' };
    }
}
