import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { LoginDto } from "./dto";
import { ResetPasswordDto } from "./dto";
import { AuthService } from "./auth.service";
import { Public } from "nest-keycloak-connect";

@ApiTags("authentication")
@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService){}

    @Public()
    @Post("login")
    @ApiOperation({ summary: 'Request a token' })
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }

    @Post("password/reset")
    @ApiOperation({ summary: 'Reset user password' })
    resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
        return `password reset: ${JSON.stringify(resetPasswordDto)}`;
    }

}
