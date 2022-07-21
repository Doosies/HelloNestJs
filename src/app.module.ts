import { Module } from '@nestjs/common';
import { ApiController } from './api-controller/api.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';

@Module({
    imports: [],
    controllers: [ApiController, AppController, CatsController],
    providers: [AppService]
})
export class AppModule {}
