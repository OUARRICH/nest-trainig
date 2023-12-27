import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateProfileDto } from "./dto/create-profile-dto";
import {
    Roles,
    Unprotected,
} from 'nest-keycloak-connect';

@ApiTags('profile')
@Controller('profile')
export class ProfileController {
    @Post('register')
    @Unprotected()
    @ApiOperation({ summary: 'Create user profile' })
    create(@Body() createprofileDto: CreateProfileDto) {
        return `User Profile was created: ${JSON.stringify(createprofileDto)}`;
    }

    @Get('emailExist/:email')
    @Roles({ roles: ['user'] })
    @ApiOperation({ summary: 'Verify Email existence' })
    existEmail(@Param('email') email: string) {
        return "email" + email;
    }
}