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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const user_models_1 = require("./user.models");
const bcryptjs_1 = require("bcryptjs");
const mongoose_2 = require("@nestjs/mongoose");
const jsonwebtoken_1 = require("jsonwebtoken");
const config_service_1 = require("../../config/config.service");
let UserService = class UserService {
    userModel;
    appConfigService;
    constructor(userModel, appConfigService) {
        this.userModel = userModel;
        this.appConfigService = appConfigService;
    }
    async createUser(username, email, password) {
        if (!username || username.length < 6 || username.length > 24) {
            throw new common_1.BadRequestException({
                message: 'Invalid Username',
            });
        }
        else if (!email) {
            throw new common_1.BadRequestException({
                message: 'Invalid Email',
            });
        }
        else if (!password || password.length < 8) {
            throw new common_1.BadRequestException({
                message: 'Invalid Password',
            });
        }
        const userExistsByEmail = await this.userModel.findOne({
            email
        });
        const userExistsByUsername = await this.userModel.findOne({
            username
        });
        if (userExistsByEmail) {
            throw new common_1.ForbiddenException({
                message: 'User Already Exists!'
            });
        }
        else if (userExistsByUsername) {
            throw new common_1.ForbiddenException({
                message: 'User Already Exists!'
            });
        }
        else {
            const hashedPassword = await (0, bcryptjs_1.hash)(password, 15);
            const createdUser = await this.userModel.create({
                username,
                email,
                password: hashedPassword
            });
            return {
                message: 'User Created Successfully!'
            };
        }
    }
    async getUsers() {
        const users = await this.userModel.find();
        if (!users) {
            throw new common_1.NotFoundException({
                message: 'Users Not Found!',
                data: null
            });
        }
        else {
            return {
                message: 'Users Found!',
                data: users
            };
        }
    }
    async getUserById(id) {
        if (!id) {
            throw new common_1.BadRequestException({
                message: 'Invalid Id!',
            });
        }
        const user = await this.userModel.findOne({
            _id: id
        });
        if (!user) {
            throw new common_1.NotFoundException({
                message: 'User Not Found!',
            });
        }
        else {
            return {
                message: 'User Found!',
                data: user
            };
        }
    }
    async getUsersByIds(ids) {
        if (!ids) {
            throw new common_1.BadRequestException({
                message: 'Invalid Ids!',
            });
        }
        const user = await this.userModel.find({
            _id: {
                $in: ids
            }
        });
        if (!user) {
            throw new common_1.NotFoundException({
                message: 'User Not Found!',
            });
        }
        else {
            return {
                message: 'User Found!',
                data: user
            };
        }
    }
    async isLoggedIn(request) {
        const token = request.cookies.token;
        if (!token) {
            return false;
        }
        else {
            return true;
        }
    }
    async getLoggedInUser(request) {
        const token = request.cookies.token;
        if (token === undefined) {
            throw new common_1.BadRequestException({
                message: 'Token Not Found!'
            });
        }
        const decodedToken = (0, jsonwebtoken_1.verify)(token, this.appConfigService.jwtSecret);
        const tokenData = {
            _id: decodedToken._id,
            email: decodedToken.email,
            username: decodedToken.username
        };
        const user = await this.userModel.findOne({
            email: tokenData.email,
            username: tokenData.username,
        });
        if (!user) {
            throw new common_1.NotFoundException({
                message: 'User Not Found!'
            });
        }
        else {
            return { data: user };
        }
    }
    async updateUser(id, tagline, description, image, skills) {
        if (!id) {
            throw new common_1.BadRequestException({
                message: 'Invalid Id!',
            });
        }
        const user = await this.userModel.findOne({
            _id: id
        });
        if (!user) {
            throw new common_1.NotFoundException({
                message: 'User Not Found!',
            });
        }
        else {
            const updatedUser = await user.updateOne({
                tagline,
                description,
                image,
                skills
            });
            return {
                message: 'User Updated Successfully!',
                data: updatedUser
            };
        }
    }
    async deleteUser(id) {
        if (!id) {
            throw new common_1.BadRequestException({
                message: 'Invalid Id!',
            });
        }
        const user = await this.userModel.findOne({
            _id: id
        });
        if (!user) {
            throw new common_1.NotFoundException({
                message: 'User Not Found!',
            });
        }
        else {
            const deletedUser = await user.deleteOne();
            return {
                message: 'User Deleted Successfully!',
                data: deletedUser
            };
        }
    }
    async loginUser(email, password, res) {
        if (!email) {
            throw new common_1.BadRequestException({
                message: 'Invalid Email'
            });
        }
        else if (!password || password.length < 8) {
            throw new common_1.BadRequestException({
                message: 'Invalid Password'
            });
        }
        const userExists = await this.userModel.findOne({
            email
        });
        if (!userExists) {
            throw new common_1.NotFoundException({
                message: 'User Not Found!'
            });
        }
        else {
            const passwordMatched = await (0, bcryptjs_1.compare)(password, userExists.password);
            if (!passwordMatched) {
                throw new common_1.UnauthorizedException({
                    message: 'Password Incorrect!'
                });
            }
            else {
                const token = (0, jsonwebtoken_1.sign)({
                    _id: userExists._id,
                    email: userExists.email,
                    username: userExists.username,
                    type: 'user'
                }, this.appConfigService.jwtSecret);
                res.cookie('token', token, {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'none',
                    path: '/'
                });
                return {
                    message: 'User LoggedIn Successfully!',
                    data: userExists
                };
            }
        }
    }
    async logoutUser(request, response) {
        const token = request.cookies.token;
        if (!token) {
            throw new common_1.NotFoundException({
                message: 'Token Not Found!'
            });
        }
        else {
            response.clearCookie('token', {
                httpOnly: true,
                secure: true,
                sameSite: 'none',
                path: '/'
            });
            return {
                message: 'User Logged Out!'
            };
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_models_1.User.name)),
    __param(1, (0, common_1.Inject)(config_service_1.AppConfigService)),
    __metadata("design:paramtypes", [mongoose_1.Model, config_service_1.AppConfigService])
], UserService);
//# sourceMappingURL=users.service.js.map