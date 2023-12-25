import {Module} from '@nestjs/common';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './authentication/auth.module';


@Module({
    imports:[ProfileModule, AuthModule]
})
export class AppModule {
}