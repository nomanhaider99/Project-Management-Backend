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
exports.BusinessController = void 0;
const common_1 = require("@nestjs/common");
const business_service_1 = require("./business.service");
let BusinessController = class BusinessController {
    businessService;
    constructor(businessService) {
        this.businessService = businessService;
    }
    async registerBusiness(body, response) {
        const { name, email, password } = body;
        const business = await this.businessService.createBusiness(name, email, password);
        response.json(business);
    }
    async getAllBusinesss(response) {
        const business = await this.businessService.getBusiness();
        response.json(business);
    }
    async getBusiness(response, params) {
        const { id } = params;
        const business = await this.businessService.getBusinessById(id);
        response.json(business);
    }
    async getLoggedInBusiness(response, request) {
        const business = await this.businessService.getLoggedInBusiness(request);
        response.json(business);
    }
    async isBusinessLoggedIn(response, request) {
        const business = await this.businessService.isBusinessLoggedIn(request);
        response.json(business);
    }
    async updateBusinessById(body, params, response) {
        const { id } = params;
        const { tagline, description, logo, address, industry } = body;
        const business = await this.businessService.updateBusiness(id, tagline, description, logo, industry, address);
        response.json(business);
    }
    async deleteBusinessById(params, response) {
        const { id } = params;
        const business = await this.businessService.deleteBusiness(id);
        response.json(business);
    }
    async loginBusiness(body, response) {
        const { email, password } = body;
        const business = await this.businessService.loginBusiness(email, password, response);
        response.json(business);
    }
    async logoutBusiness(response, request) {
        const business = await this.businessService.logoutBusiness(request, response);
        response.json(business);
    }
};
exports.BusinessController = BusinessController;
__decorate([
    (0, common_1.Post)('create-business'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "registerBusiness", null);
__decorate([
    (0, common_1.Get)('get-businesses'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "getAllBusinesss", null);
__decorate([
    (0, common_1.Get)('get-business/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "getBusiness", null);
__decorate([
    (0, common_1.Get)('get-loggedin-business'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "getLoggedInBusiness", null);
__decorate([
    (0, common_1.Get)('isloggedin-business'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "isBusinessLoggedIn", null);
__decorate([
    (0, common_1.Patch)('update-business/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "updateBusinessById", null);
__decorate([
    (0, common_1.Delete)('delete-business/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "deleteBusinessById", null);
__decorate([
    (0, common_1.Post)('login-business'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "loginBusiness", null);
__decorate([
    (0, common_1.Get)('logout-business'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "logoutBusiness", null);
exports.BusinessController = BusinessController = __decorate([
    (0, common_1.Controller)('api/v1/businesses'),
    __metadata("design:paramtypes", [business_service_1.BusinessService])
], BusinessController);
//# sourceMappingURL=business.controller.js.map