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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
let UsersController = class UsersController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async registerUser(body, response) {
        const { username, email, password } = body;
        const user = await this.userService.createUser(username, email, password);
        response.json(user);
    }
    async getAllUsers(response) {
        const user = await this.userService.getUsers();
        response.json(user);
    }
    async getUser(response, params) {
        const { id } = params;
        const user = await this.userService.getUserById(id);
        response.json(user);
    }
    async getUsersByIds(response, body) {
        const { ids } = body;
        const user = await this.userService.getUsersByIds(ids);
        response.json(user);
    }
    async updateUserById(body, params, response) {
        const { id } = params;
        const { tagline, description, image, skills } = body;
        const user = await this.userService.updateUser(id, tagline, description, image, skills);
        response.json(user);
    }
    async deleteUserById(params, response) {
        const { id } = params;
        const user = await this.userService.deleteUser(id);
        response.json(user);
    }
    async loginUser(body, response) {
        const { email, password } = body;
        const user = await this.userService.loginUser(email, password, response);
        response.json(user);
    }
    async getLoggedInUser(request, response) {
        const user = await this.userService.getLoggedInUser(request);
        response.json(user);
    }
    async logoutUser(request, response) {
        const user = await this.userService.logoutUser(request, response);
        response.json(user);
    }
    async isLoggedIn(request, response) {
        const user = await this.userService.isLoggedIn(request);
        response.json(user);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('create-user'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "registerUser", null);
__decorate([
    (0, common_1.Get)('get-users'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)('get-user/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)('get-users-by-ids'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUsersByIds", null);
__decorate([
    (0, common_1.Patch)('update-user/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUserById", null);
__decorate([
    (0, common_1.Delete)('delete-user/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUserById", null);
__decorate([
    (0, common_1.Post)('/login-user'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "loginUser", null);
__decorate([
    (0, common_1.Get)('/get-loggedin-user'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getLoggedInUser", null);
__decorate([
    (0, common_1.Get)('/logout-user'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "logoutUser", null);
__decorate([
    (0, common_1.Get)('/is-loggedin'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "isLoggedIn", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('/api/v1/users'),
    __metadata("design:paramtypes", [users_service_1.UserService])
], UsersController);
//# sourceMappingURL=users.controller.js.map