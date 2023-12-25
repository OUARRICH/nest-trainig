import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddlware } from './cats/logger.middlware';
import { CatsController } from './cats/cats.controller';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './authentication/auth.module';


@Module({
    imports:[CatsModule, ProfileModule, AuthModule]
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddlware)
            .exclude('swagger')
            .forRoutes(CatsController);

    }
}