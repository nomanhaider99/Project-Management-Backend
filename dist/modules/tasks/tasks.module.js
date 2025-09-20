"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const milestone_models_1 = require("../milestones/milestone.models");
const task_models_1 = require("./task.models");
const tasks_controller_1 = require("./tasks.controller");
const tasks_service_1 = require("./tasks.service");
let TaskModule = class TaskModule {
};
exports.TaskModule = TaskModule;
exports.TaskModule = TaskModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: milestone_models_1.Milestone.name,
                    schema: milestone_models_1.MilestoneSchema
                },
                {
                    name: task_models_1.Task.name,
                    schema: task_models_1.TaskSchema
                },
            ]),
        ],
        exports: [],
        controllers: [tasks_controller_1.TasksController],
        providers: [tasks_service_1.TasksService]
    })
], TaskModule);
//# sourceMappingURL=tasks.module.js.map