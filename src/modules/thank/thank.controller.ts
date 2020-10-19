import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { Thank } from './entity/thank.entity';
import { ThankService } from './thank.service';
import { CreateThankDTO } from './dto/createThank.dto';
import { createThankSchema } from './schema/createThank.schema';

@ApiTags('thank')
@Controller('thank')
export class ThankController {
    constructor(private thanksService: ThankService) {}

    @Get('/list')
    @ApiOkResponse({
        description: 'The method have to return a list of thanks',
    })
    public getThanksList() {
        return { test: 'working' };
    }

    @Post('/add')
    @ApiOkResponse({
        description: 'The method for add thanks for thank',
    })
    @ApiBody({ schema: createThankSchema })
    public async addThank(@Body() createThankDTO: CreateThankDTO): Promise<Thank> {
        return await this.thanksService.createThank(createThankDTO);
    }
}
