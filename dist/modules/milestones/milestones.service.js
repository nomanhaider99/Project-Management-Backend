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
exports.MilestonesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const milestone_models_1 = require("./milestone.models");
const project_models_1 = require("../projects/project.models");
let MilestonesService = class MilestonesService {
    milestoneModel;
    projectModel;
    constructor(milestoneModel, projectModel) {
        this.milestoneModel = milestoneModel;
        this.projectModel = projectModel;
    }
    async createMilestone(title, project, description) {
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
        const milestoneExists = await this.milestoneModel.findOne({
            title,
            project
        });
        if (milestoneExists) {
            throw new common_1.ForbiddenException({
                message: 'Milestone Already Exists!',
                data: milestoneExists
            });
        }
        else {
            const createdMilestone = await this.milestoneModel.create({
                title,
                description,
                project
            });
            await this.projectModel.findByIdAndUpdate(project, {
                $addToSet: {
                    milestones: createdMilestone._id
                }
            });
            return {
                message: 'Milestone Created Successfully!',
                data: createdMilestone
            };
        }
    }
    async getMilestones() {
        const milestones = await this.milestoneModel.find();
        if (!milestones.length) {
            throw new common_1.NotFoundException({
                message: 'Milestones Not Found!',
                data: null
            });
        }
        else {
            return {
                message: 'Milestones Found!',
                data: milestones
            };
        }
    }
    async getMilestonesOfProject(project) {
        const milestones = await this.milestoneModel.find({
            project: project
        });
        if (!milestones.length) {
            throw new common_1.NotFoundException({
                message: 'Milestones Not Found!'
            });
        }
        else {
            return {
                message: 'Milestones Found!',
                data: milestones
            };
        }
    }
    async getMilestoneById(id) {
        if (!id) {
            throw new common_1.BadRequestException({
                message: 'Invalid Id!',
            });
        }
        const milestone = await this.milestoneModel.findOne({
            _id: id
        });
        if (!milestone) {
            throw new common_1.NotFoundException({
                message: 'Milestone Not Found!',
            });
        }
        else {
            return {
                message: 'Milestone Found!',
                data: milestone
            };
        }
    }
    async updateMilestone(id, description, status) {
        if (!id) {
            throw new common_1.BadRequestException({
                message: 'Invalid Id!',
            });
        }
        const milestone = await this.milestoneModel.findOne({
            _id: id
        });
        if (!milestone) {
            throw new common_1.NotFoundException({
                message: 'Milestone Not Found!',
            });
        }
        else {
            const updatedMilestone = await milestone.updateOne({
                description,
                status
            });
            return {
                message: 'Milestone Updated Successfully!',
                data: updatedMilestone
            };
        }
    }
    async updateMilestoneStatus(id, projectId) {
        if (!id) {
            throw new common_1.BadRequestException({
                message: 'Invalid Id!',
            });
        }
        const milestone = await this.milestoneModel.findOne({
            _id: id
        });
        if (!milestone) {
            throw new common_1.NotFoundException({
                message: 'Milestone Not Found!',
            });
        }
        else {
            await milestone.updateOne({
                status: 'completed'
            });
            const project = await this.projectModel.findOne({
                _id: projectId
            });
            if (!project) {
                throw new common_1.NotFoundException({
                    message: 'Project Not Found!'
                });
            }
            else {
                const totalMilestones = await this.milestoneModel.find({
                    _id: {
                        $in: project.milestones
                    },
                });
                const completedMilestones = await this.milestoneModel.find({
                    _id: {
                        $in: project.milestones
                    },
                    status: 'completed'
                });
                const progress = (completedMilestones.length * 100) / totalMilestones.length;
                if (progress < 100) {
                    await project.updateOne({
                        progress
                    });
                }
                else {
                    await project.updateOne({
                        progress,
                        status: 'completed'
                    });
                }
                return {
                    message: 'Milestone Progress Updated Successfully!'
                };
            }
        }
    }
    async deleteMilestone(id) {
        if (!id) {
            throw new common_1.BadRequestException({
                message: 'Invalid Id!',
            });
        }
        const milestone = await this.milestoneModel.findOne({
            _id: id
        });
        if (!milestone) {
            throw new common_1.NotFoundException({
                message: 'Milestone Not Found!',
            });
        }
        else {
            const deletedMilestone = await milestone.deleteOne();
            return {
                message: 'Milestone Deleted Successfully!',
                data: deletedMilestone
            };
        }
    }
};
exports.MilestonesService = MilestonesService;
exports.MilestonesService = MilestonesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(milestone_models_1.Milestone.name)),
    __param(1, (0, mongoose_1.InjectModel)(project_models_1.Project.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, mongoose_2.Model])
], MilestonesService);
//# sourceMappingURL=milestones.service.js.map