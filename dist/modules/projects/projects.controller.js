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
exports.ProjectsController = void 0;
const common_1 = require("@nestjs/common");
const projects_service_1 = require("./projects.service");
let ProjectsController = class ProjectsController {
    projectService;
    constructor(projectService) {
        this.projectService = projectService;
    }
    async registerProject(body, response) {
        const { title, description, owner, status, priority, startDate } = body;
        const project = await this.projectService.createProject(title, description, owner, status, priority, startDate);
        response.json(project);
    }
    async getAllProjects(response, params) {
        const { id } = params;
        const project = await this.projectService.getProjectsOfBusiness(id);
        response.json(project);
    }
    async getProjectsOfUser(response, params) {
        const { id } = params;
        const project = await this.projectService.getProjectsOfUser(id);
        response.json(project);
    }
    async getProject(response, params) {
        const { id } = params;
        const project = await this.projectService.getProjectById(id);
        response.json(project);
    }
    async updateProjectById(body, params, response) {
        const { id } = params;
        const { member, status, priority, progress, startDate, endDate } = body;
        const project = await this.projectService.updateProject(id, member, status, priority, progress, startDate, endDate);
        response.json(project);
    }
    async addMembers(body, params, response) {
        const { id } = params;
        const { member } = body;
        const project = await this.projectService.addMembers(id, member);
        response.json(project);
    }
    async addMembersByUsername(body, params, response) {
        const { id } = params;
        const { username } = body;
        const project = await this.projectService.addMemberThroughUsername(id, username);
        response.json(project);
    }
    async deleteMemberById(body, params, response) {
        const { id } = params;
        const { member } = body;
        const project = await this.projectService.deleteMember(id, member);
        response.json(project);
    }
    async deleteProjectById(params, response) {
        const { id } = params;
        const project = await this.projectService.deleteProject(id);
        response.json(project);
    }
    async getMilestoneOfProject(params, response) {
        const { id } = params;
        const project = await this.projectService.updateProjectProgress(id);
        response.json(project);
    }
};
exports.ProjectsController = ProjectsController;
__decorate([
    (0, common_1.Post)('create-project'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "registerProject", null);
__decorate([
    (0, common_1.Get)('get-projects/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "getAllProjects", null);
__decorate([
    (0, common_1.Get)('get-projects-of-user/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "getProjectsOfUser", null);
__decorate([
    (0, common_1.Get)('get-project/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "getProject", null);
__decorate([
    (0, common_1.Patch)('update-project/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "updateProjectById", null);
__decorate([
    (0, common_1.Patch)('add-member/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "addMembers", null);
__decorate([
    (0, common_1.Patch)('add-member-by-username/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "addMembersByUsername", null);
__decorate([
    (0, common_1.Patch)('delete-member/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "deleteMemberById", null);
__decorate([
    (0, common_1.Delete)('delete-project/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "deleteProjectById", null);
__decorate([
    (0, common_1.Get)('update-project-progress/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "getMilestoneOfProject", null);
exports.ProjectsController = ProjectsController = __decorate([
    (0, common_1.Controller)('api/v1/projects'),
    __metadata("design:paramtypes", [projects_service_1.ProjectService])
], ProjectsController);
//# sourceMappingURL=projects.controller.js.map