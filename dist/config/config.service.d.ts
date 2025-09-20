import { ConfigService } from "@nestjs/config";
export declare class AppConfigService {
    private configService;
    constructor(configService: ConfigService);
    get port(): number;
    get databaseUrl(): string;
    get jwtSecret(): string;
}
