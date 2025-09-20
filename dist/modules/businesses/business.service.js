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
exports.BusinessService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const bcryptjs_1 = require("bcryptjs");
const mongoose_2 = require("mongoose");
const business_models_1 = require("./business.models");
const jsonwebtoken_1 = require("jsonwebtoken");
const config_service_1 = require("../../config/config.service");
let BusinessService = class BusinessService {
    businessModel;
    appConfigService;
    constructor(businessModel, appConfigService) {
        this.businessModel = businessModel;
        this.appConfigService = appConfigService;
    }
    async createBusiness(name, email, password) {
        if (!name || name.length < 2 || name.length > 80) {
            throw new common_1.BadRequestException({
                message: 'Invalid Name!',
            });
        }
        else if (!email) {
            throw new common_1.BadRequestException({
                message: 'Invalid Email!',
            });
        }
        else if (!password || password.length < 8) {
            throw new common_1.BadRequestException({
                message: 'Invalid Password!',
            });
        }
        const businessExists = await this.businessModel.findOne({
            email
        });
        if (businessExists) {
            throw new common_1.ForbiddenException({
                message: 'Business Already Exists!'
            });
        }
        else {
            const hashedPassword = await (0, bcryptjs_1.hash)(password, 15);
            const createdBusiness = await this.businessModel.create({
                name,
                email,
                password: hashedPassword
            });
            return {
                message: 'Business Created Successfully!'
            };
        }
    }
    async getBusiness() {
        const businesses = await this.businessModel.find();
        if (!businesses.length) {
            throw new common_1.NotFoundException({
                message: 'Businesses Not Found!',
                data: null
            });
        }
        else {
            return {
                message: 'Businesses Found!',
                data: businesses
            };
        }
    }
    async getBusinessById(id) {
        if (!id) {
            throw new common_1.BadRequestException({
                message: 'Invalid Id!',
            });
        }
        const business = await this.businessModel.findOne({
            _id: id
        });
        if (!business) {
            throw new common_1.NotFoundException({
                message: 'Business Not Found!',
            });
        }
        else {
            return {
                message: 'Business Found!',
                data: business
            };
        }
    }
    async updateBusiness(id, tagline, description, logo, industry, address) {
        if (!id) {
            throw new common_1.BadRequestException({
                message: 'Invalid Id!',
            });
        }
        else if (!tagline || tagline.length < 15 || tagline.length > 80) {
            throw new common_1.BadRequestException({
                message: 'Invalid Tagline!',
            });
        }
        else if (description) {
            if (description.length < 30 || description.length > 600) {
                throw new common_1.BadRequestException({
                    message: 'Invalid Description!',
                });
            }
        }
        else if (address) {
            if (address.length < 15 || address.length > 150) {
                throw new common_1.BadRequestException({
                    message: 'Invalid Description!',
                });
            }
        }
        const business = await this.businessModel.findOne({
            _id: id
        });
        if (!business) {
            throw new common_1.NotFoundException({
                message: 'Business Not Found!',
            });
        }
        else {
            const updatedBusiness = await business.updateOne({
                tagline,
                description,
                logo,
                address,
                industry
            });
            return {
                message: 'Business Updated Successfully!',
                data: updatedBusiness
            };
        }
    }
    async deleteBusiness(id) {
        if (!id) {
            throw new common_1.BadRequestException({
                message: 'Invalid Id!',
            });
        }
        const business = await this.businessModel.findOne({
            _id: id
        });
        if (!business) {
            throw new common_1.NotFoundException({
                message: 'Business Not Found!',
            });
        }
        else {
            const deletedBusiness = await business.deleteOne();
            return {
                message: 'Business Deleted Successfully!',
                data: deletedBusiness
            };
        }
    }
    async isBusinessLoggedIn(request) {
        const token = request.cookies.token;
        if (!token) {
            return false;
        }
        else {
            return true;
        }
    }
    async getLoggedInBusiness(request) {
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
        const business = await this.businessModel.findOne({
            _id: tokenData._id,
            email: tokenData.email,
        });
        if (!business) {
            throw new common_1.NotFoundException({
                message: 'Business Not Found!'
            });
        }
        else {
            return { data: business };
        }
    }
    async loginBusiness(email, password, res) {
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
        const businessExists = await this.businessModel.findOne({
            email
        });
        if (!businessExists) {
            throw new common_1.NotFoundException({
                message: 'Business Not Found!'
            });
        }
        else {
            const passwordMatched = await (0, bcryptjs_1.compare)(password, businessExists.password);
            if (!passwordMatched) {
                throw new common_1.UnauthorizedException({
                    message: 'Password Incorrect!'
                });
            }
            else {
                const token = (0, jsonwebtoken_1.sign)({
                    _id: businessExists._id,
                    email: businessExists.email,
                    name: businessExists.name,
                    type: 'business'
                }, this.appConfigService.jwtSecret);
                res.cookie('token', token, {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'none',
                    path: '/'
                });
                return {
                    message: 'Business LoggedIn Successfully!',
                    data: businessExists
                };
            }
        }
    }
    async logoutBusiness(request, response) {
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
                message: 'Business LoggedOut Successfully!'
            };
        }
    }
};
exports.BusinessService = BusinessService;
exports.BusinessService = BusinessService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(business_models_1.Business.name)),
    __param(1, (0, common_1.Inject)(config_service_1.AppConfigService)),
    __metadata("design:paramtypes", [mongoose_2.Model, config_service_1.AppConfigService])
], BusinessService);
//# sourceMappingURL=business.service.js.map