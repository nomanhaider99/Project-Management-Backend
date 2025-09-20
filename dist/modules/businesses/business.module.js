"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessModule = void 0;
const common_1 = require("@nestjs/common");
const business_service_1 = require("./business.service");
const mongoose_1 = require("@nestjs/mongoose");
const business_models_1 = require("./business.models");
const business_controller_1 = require("./business.controller");
const config_service_1 = require("../../config/config.service");
let BusinessModule = class BusinessModule {
};
exports.BusinessModule = BusinessModule;
exports.BusinessModule = BusinessModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: business_models_1.Business.name,
                    schema: business_models_1.BusinessSchema
                },
            ])
        ],
        providers: [business_service_1.BusinessService, config_service_1.AppConfigService],
        exports: [],
        controllers: [business_controller_1.BusinessController]
    })
], BusinessModule);
//# sourceMappingURL=business.module.js.map