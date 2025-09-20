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
exports.MilestonesController = void 0;
const common_1 = require("@nestjs/common");
const milestones_service_1 = require("./milestones.service");
let MilestonesController = class MilestonesController {
    milestoneService;
    constructor(milestoneService) {
        this.milestoneService = milestoneService;
    }
    async createMilestone(body, response) {
        const { title, description, project } = body;
        const milestone = await this.milestoneService.createMilestone(title, project, description);
        response.json(milestone);
    }
    async getAllMilestones(response) {
        const milestone = await this.milestoneService.getMilestones();
        response.json(milestone);
    }
    async getMilestoneOfProject(response, params) {
        const { id } = params;
        const milestone = await this.milestoneService.getMilestoneById(id);
        response.json(milestone);
    }
    async getMilestoneOfAProject(response, params) {
        const { project } = params;
        const milestone = await this.milestoneService.getMilestonesOfProject(project);
        response.json(milestone);
    }
    async updateMilestoneById(body, params, response) {
        const { id } = params;
        const { description, status } = body;
        const milestone = await this.milestoneService.updateMilestone(id, description, status);
        response.json(milestone);
    }
    async updateMilestoneStatus(params, response) {
        const { id, project } = params;
        const milestone = await this.milestoneService.updateMilestoneStatus(id, project);
        response.json(milestone);
    }
    async deleteMilestoneById(params, response) {
        const { id } = params;
        const milestone = await this.milestoneService.deleteMilestone(id);
        response.json(milestone);
    }
};
exports.MilestonesController = MilestonesController;
__decorate([
    (0, common_1.Post)('create-milestone'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MilestonesController.prototype, "createMilestone", null);
__decorate([
    (0, common_1.Get)('get-milestones'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MilestonesController.prototype, "getAllMilestones", null);
__decorate([
    (0, common_1.Get)('get-milestone/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MilestonesController.prototype, "getMilestoneOfProject", null);
__decorate([
    (0, common_1.Get)('get-milestone-of-project/:project'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MilestonesController.prototype, "getMilestoneOfAProject", null);
__decorate([
    (0, common_1.Patch)('update-milestone/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], MilestonesController.prototype, "updateMilestoneById", null);
__decorate([
    (0, common_1.Get)('update-milestone-progress/:id/:project'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MilestonesController.prototype, "updateMilestoneStatus", null);
__decorate([
    (0, common_1.Delete)('delete-milestone/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MilestonesController.prototype, "deleteMilestoneById", null);
exports.MilestonesController = MilestonesController = __decorate([
    (0, common_1.Controller)('api/v1/milestones'),
    __metadata("design:paramtypes", [milestones_service_1.MilestonesService])
], MilestonesController);
//# sourceMappingURL=milestones.controller.js.map