import {
    Body,
    Controller,
    Get,
    Header,
    HttpCode,
    Param,
    Post,
    Redirect,
    Req
} from '@nestjs/common';
import { CreateUserDto } from './CreateUserDTO';

@Controller({})
export class CatsController {
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }

    @Get('request')
    sayHello(@Req() req: Request): string {
        console.log(req);
        return 'Hello';
    }

    @Get('wil*Card')
    wildCard(): string {
        return 'This is use Whild Card';
    }

    @Get('status')
    @HttpCode(202)
    changeStatus(): string {
        return 'change 200 to 202';
    }

    @Get('header')
    @Header('Cache-Control', 'none')
    someHeader(): string {
        return 'read header';
    }

    @Get('redirect')
    @Redirect('/', 301)
    redirectRoot(): string {
        return 'redirect to root';
    }

    @Get(':id/memo/:memoId')
    findOne(@Param('id') id, @Param('memoId') memoId): string {
        return `id# ${id}, memoId# ${memoId}`;
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto);
        const { name, email } = createUserDto;
        return `create use success #${name} - ${email}`;
    }
}
