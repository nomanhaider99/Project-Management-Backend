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
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
let TasksController = class TasksController {
    taskService;
    constructor(taskService) {
        this.taskService = taskService;
    }
    async createTask(body, response) {
        const { title, description, project, milestone } = body;
        const task = await this.taskService.createTask(title, project, milestone, description);
        response.json(task);
    }
    async getTasksOfMilestone(body, response, params) {
        const { project, milestone } = params;
        const task = await this.taskService.getTasksOfMilestoneOfProject(milestone, project);
        response.json(task);
    }
    async getTaskOfMilestone(response, params) {
        const { id } = params;
        const milestone = await this.taskService.getTaskById(id);
        response.json(milestone);
    }
    async updateMilestoneById(body, params, response) {
        const { id } = params;
        const { description } = body;
        const milestone = await this.taskService.updateTask(id, description);
        response.json(milestone);
    }
    async deleteMilestoneById(params, response) {
        const { id } = params;
        const milestone = await this.taskService.deleteTask(id);
        response.json(milestone);
    }
};
exports.TasksController = TasksController;
__decorate([
    (0, common_1.Post)('create-task'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "createTask", null);
__decorate([
    (0, common_1.Get)('get-tasks/:project/:milestone'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getTasksOfMilestone", null);
__decorate([
    (0, common_1.Get)('get-task/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getTaskOfMilestone", null);
__decorate([
    (0, common_1.Patch)('update-task/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "updateMilestoneById", null);
__decorate([
    (0, common_1.Delete)('delete-task/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "deleteMilestoneById", null);
exports.TasksController = TasksController = __decorate([
    (0, common_1.Controller)('api/v1/tasks'),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
//# sourceMappingURL=tasks.controller.js.map