import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { LoginDto } from "./dto";
import { ResetPasswordDto } from "./dto";

@ApiTags("authentication")
@Controller("auth")
export class AuthController {
    @Post("login")
    @ApiOperation({ summary: 'Request a token' })
    login(@Body() loginDto: LoginDto) {
        return `User login DTO: ${JSON.stringify(loginDto)}`;
    }

    @Post("password/reset")
    @ApiOperation({ summary: 'Reset user password' })
    resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
        return `password reset: ${JSON.stringify(resetPasswordDto)}`;
    }

}
