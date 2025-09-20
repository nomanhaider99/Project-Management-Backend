"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilestoneModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const milestone_models_1 = require("./milestone.models");
const milestones_controller_1 = require("./milestones.controller");
const milestones_service_1 = require("./milestones.service");
const project_models_1 = require("../projects/project.models");
let MilestoneModule = class MilestoneModule {
};
exports.MilestoneModule = MilestoneModule;
exports.MilestoneModule = MilestoneModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: milestone_models_1.Milestone.name,
                    schema: milestone_models_1.MilestoneSchema
                },
                {
                    name: project_models_1.Project.name,
                    schema: project_models_1.ProjectSchema
                }
            ]),
        ],
        exports: [],
        controllers: [milestones_controller_1.MilestonesController],
        providers: [milestones_service_1.MilestonesService]
    })
], MilestoneModule);
//# sourceMappingURL=milestones.module.js.map