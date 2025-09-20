import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { UserUtilsService } from "../utils/users/user.utils.service";
import { AppConfigService } from "src/config/config.service";
export declare class AuthMiddleware implements NestMiddleware {
    private userUtilsService;
    private appConfigService;
    constructor(userUtilsService: UserUtilsService, appConfigService: AppConfigService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
