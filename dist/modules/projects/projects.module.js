"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModule = void 0;
const common_1 = require("@nestjs/common");
const projects_service_1 = require("./projects.service");
const mongoose_1 = require("@nestjs/mongoose");
const project_models_1 = require("./project.models");
const business_models_1 = require("../businesses/business.models");
const projects_controller_1 = require("./projects.controller");
const user_models_1 = require("../users/user.models");
const milestone_models_1 = require("../milestones/milestone.models");
let ProjectModule = class ProjectModule {
};
exports.ProjectModule = ProjectModule;
exports.ProjectModule = ProjectModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: project_models_1.Project.name,
                    schema: project_models_1.ProjectSchema
                },
                {
                    name: business_models_1.Business.name,
                    schema: business_models_1.BusinessSchema
                },
                {
                    name: user_models_1.User.name,
                    schema: user_models_1.UserSchema
                },
                {
                    name: milestone_models_1.Milestone.name,
                    schema: milestone_models_1.MilestoneSchema
                }
            ])
        ],
        providers: [projects_service_1.ProjectService],
        controllers: [projects_controller_1.ProjectsController],
        exports: [],
    })
], ProjectModule);
//# sourceMappingURL=projects.module.js.map