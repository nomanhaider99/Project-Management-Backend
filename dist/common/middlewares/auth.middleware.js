"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const user_utils_service_1 = require("../utils/users/user.utils.service");
const config_service_1 = require("../../config/config.service");
let AuthMiddleware = class AuthMiddleware {
    userUtilsService;
    appConfigService;
    constructor(userUtilsService, appConfigService) {
        this.userUtilsService = userUtilsService;
        this.appConfigService = appConfigService;
    }
    async use(req, res, next) {
        const token = req.headers.cookie?.slice(6);
        if (!token) {
            console.log("Token Not Found!");
        }
        else {
            const decodedToken = (0, jsonwebtoken_1.verify)(token, this.appConfigService.jwtSecret);
            const user = await this.userUtilsService.getUserByEmail(decodedToken.email);
            if (user !== undefined) {
                next();
            }
        }
    }
};
exports.AuthMiddleware = AuthMiddleware;
exports.AuthMiddleware = AuthMiddleware = __decorate([
    __param(0, (0, common_1.Inject)(user_utils_service_1.UserUtilsService)),
    __param(1, (0, common_1.Inject)(config_service_1.AppConfigService)),
    __metadata("design:paramtypes", [user_utils_service_1.UserUtilsService, config_service_1.AppConfigService])
], AuthMiddleware);
//# sourceMappingURL=auth.middleware.js.map