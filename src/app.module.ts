import {Module} from '@nestjs/common';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './authentication/auth.module';
import {
    KeycloakConnectModule,
    ResourceGuard,
    RoleGuard,
    AuthGuard
} from "nest-keycloak-connect";
import { APP_GUARD } from '@nestjs/core';


@Module({
    imports:[ProfileModule, AuthModule,
        KeycloakConnectModule.register({
            authServerUrl: 'https://keycloak.192.168.49.2.nip.io/auth',
            realm: 'learn-factory-api',
            clientId: 'nest-app',
            secret: 'uoM42eIb9PZApqHzNpkvDUlVBmmAG7b5', // Secret key of the client taken from keycloak server
        })
    ],
    providers: [
        // This adds a global level authentication guard, you can also have it scoped
        // if you like.
        //
        // Will return a 401 unauthorized when it is unable to
        // verify the JWT token or Bearer header is missing.
        {
          provide: APP_GUARD,
          useClass: AuthGuard,
        },
        // This adds a global level resource guard, which is permissive.
        // Only controllers annotated with @Resource and methods with @Scopes
        // are handled by this guard.
        {
          provide: APP_GUARD,
          useClass: ResourceGuard,
        },
        // New in 1.1.0
        // This adds a global level role guard, which is permissive.
        // Used by `@Roles` decorator with the optional `@AllowAnyRole` decorator for allowing any
        // specified role passed.
        {
          provide: APP_GUARD,
          useClass: RoleGuard,
        },
    ],
})
export class AppModule {
}