import { Injectable } from "@nestjs/common";
import { LoginDto } from "./dto";
import { HttpService } from "@nestjs/axios";
import { catchError, firstValueFrom } from "rxjs";
import { AxiosError } from "axios";
const https = require('https');

 /**
    curl -k -X POST 'https://keycloak.192.168.49.2.nip.io/realms/learn-factory-api/protocol/openid-connect/token' \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -H 'Authorization: Basic bmVzdC1hcHA6SkhlRlcyWnRkc0pHcGhxa29yc1ZQeDRsT0RoelVWekE=' \
    -d 'username=said.ouarrich' \
    -d 'password=Said123#' \
    -d 'grant_type=password' \
    -d 'client_id=nest-app'
*/

@Injectable()
export class AuthService {
    constructor(private readonly httpService: HttpService){}

    async login(credentials: LoginDto) {
        const { username, password } = credentials;

        const { data } = await firstValueFrom(
            this.httpService.request({
                url: "https://keycloak.192.168.49.2.nip.io/realms/learn-factory-api/protocol/openid-connect/token",
                method: "post",
                data: {
                    username,
                    password,
                    "grant_type": "password",
                    "client_id":"nest-app"
                },
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                auth: {
                    username: "nest-app",
                    password: "JHeFW2ZtdsJGphqkorsVPx4lODhzUVzA"
                },
                httpsAgent: new https.Agent({ rejectUnauthorized: false }), // ignore certification ssl verification
            }).pipe(
                catchError((error: AxiosError) => {
                    throw 'An error happened!';
                }),
            )
        );

        return await data;

        // const response = await this.httpService.axiosRef.request({
        //     url: "https://keycloak.192.168.49.2.nip.io/realms/learn-factory-api/protocol/openid-connect/token",
        //     method: "post",
        //     data: {
        //         username,
        //         password,
        //         "grant_type": "password",
        //         "client_id":"nest-app"
        //     },
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded"
        //     },
        //     auth: {
        //         username: "nest-app",
        //         password: "JHeFW2ZtdsJGphqkorsVPx4lODhzUVzA"
        //     },
        //     httpsAgent: new https.Agent({ rejectUnauthorized: false }), // ignore certification ssl verification
        // });

        // return response.data;
    }
}