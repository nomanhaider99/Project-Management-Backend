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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const task_models_1 = require("./task.models");
let TasksService = class TasksService {
    taskModel;
    constructor(taskModel) {
        this.taskModel = taskModel;
    }
    async createTask(title, project, milestone, description) {
        if (!title) {
            throw new common_1.BadRequestException({
                message: 'Invalid Title!',
            });
        }
        else if (!project) {
            throw new common_1.BadRequestException({
                message: 'Invalid Project Id!',
            });
        }
        else if (!milestone) {
            throw new common_1.BadRequestException({
                message: 'Invalid Milestone Id!',
            });
        }
        const taskExists = await this.taskModel.findOne({
            title,
            milestone
        });
        if (taskExists) {
            throw new common_1.ForbiddenException({
                message: 'Task Already Exists!',
                data: taskExists
            });
        }
        else {
            const createdTask = await this.taskModel.create({
                title,
                description,
                project,
                milestone
            });
            return {
                message: 'Task Created Successfully!',
                data: createdTask
            };
        }
    }
    async getTasksOfMilestoneOfProject(milestone, project) {
        const tasks = await this.taskModel.find({
            $and: [
                { milestone: milestone },
                { project: project },
            ]
        });
        if (!tasks.length) {
            throw new common_1.NotFoundException({
                message: 'Tasks Not Found!',
                data: null
            });
        }
        else {
            return {
                message: 'Tasks Found!',
                data: tasks
            };
        }
    }
    async getTaskById(id) {
        if (!id) {
            throw new common_1.BadRequestException({
                message: 'Invalid Id!',
            });
        }
        const task = await this.taskModel.findOne({
            _id: id
        });
        if (!task) {
            throw new common_1.NotFoundException({
                message: 'Task Not Found!',
            });
        }
        else {
            return {
                message: 'Task Found!',
                data: task
            };
        }
    }
    async updateTask(id, description) {
        if (!id) {
            throw new common_1.BadRequestException({
                message: 'Invalid Id!',
            });
        }
        const task = await this.taskModel.findOne({
            _id: id
        });
        if (!task) {
            throw new common_1.NotFoundException({
                message: 'Task Not Found!',
            });
        }
        else {
            const updatedTask = await task.updateOne({
                description
            });
            return {
                message: 'Task Updated Successfully!',
                data: updatedTask
            };
        }
    }
    async deleteTask(id) {
        if (!id) {
            throw new common_1.BadRequestException({
                message: 'Invalid Id!',
            });
        }
        const task = await this.taskModel.findOne({
            _id: id
        });
        if (!task) {
            throw new common_1.NotFoundException({
                message: 'Task Not Found!',
            });
        }
        else {
            const deletedTask = await task.deleteOne();
            return {
                message: 'Task Deleted Successfully!',
                data: deletedTask
            };
        }
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(task_models_1.Task.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TasksService);
//# sourceMappingURL=tasks.service.js.map