import { AppConfigService } from "src/config/config.service";
export declare class DatabaseService {
    private appConfigService;
    constructor(appConfigService: AppConfigService);
    connectMongoDB(): Promise<void>;
}
