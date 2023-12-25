import { ApiProperty } from "@nestjs/swagger";

export class CreateProfileDto {
    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    mailProfile: string;

    @ApiProperty()
    roles: string[]
}
