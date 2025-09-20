"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const milestones_module_1 = require("./modules/milestones/milestones.module");
const tasks_module_1 = require("./modules/tasks/tasks.module");
const projects_module_1 = require("./modules/projects/projects.module");
const business_module_1 = require("./modules/businesses/business.module");
const users_module_1 = require("./modules/users/users.module");
const config_service_1 = require("./config/config.service");
const config_module_1 = require("./config/config.module");
const database_module_1 = require("./database/database.module");
const user_utils_service_1 = require("./common/utils/users/user.utils.service");
const user_utils_module_1 = require("./common/utils/users/user.utils.module");
const user_models_1 = require("./modules/users/user.models");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    uri: configService.get('MONGODB_URI')
                }),
            }),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: user_models_1.User.name,
                    schema: user_models_1.UserSchema
                }
            ]),
            users_module_1.UserModule,
            milestones_module_1.MilestoneModule,
            tasks_module_1.TaskModule,
            projects_module_1.ProjectModule,
            business_module_1.BusinessModule,
            config_module_1.AppConfigModule,
            database_module_1.DatabaseModule,
            user_utils_module_1.UserUtilsModule,
            config_1.ConfigModule
        ],
        controllers: [],
        providers: [config_service_1.AppConfigService, user_utils_service_1.UserUtilsService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map