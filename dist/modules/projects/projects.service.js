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
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const business_models_1 = require("../businesses/business.models");
const project_models_1 = require("./project.models");
const user_models_1 = require("../users/user.models");
const milestone_models_1 = require("../milestones/milestone.models");
let ProjectService = class ProjectService {
    projectModel;
    businessModel;
    userModel;
    milestoneModel;
    constructor(projectModel, businessModel, userModel, milestoneModel) {
        this.projectModel = projectModel;
        this.businessModel = businessModel;
        this.userModel = userModel;
        this.milestoneModel = milestoneModel;
    }
    async createProject(title, description, owner, status, priority, startDate) {
        if (!title || title.length < 6 || title.length > 25) {
            throw new common_1.BadRequestException({
                message: 'Invalid Title!'
            });
        }
        else if (!description || description.length < 30 || description.length > 100) {
            throw new common_1.BadRequestException({
                message: 'Invalid Description!'
            });
        }
        else if (!owner) {
            throw new common_1.BadRequestException({
                message: 'Invalid Business!'
            });
        }
        else if (!status) {
            throw new common_1.BadRequestException({
                message: 'Invalid Status!'
            });
        }
        else if (!priority) {
            throw new common_1.BadRequestException({
                message: 'Invalid Priority!'
            });
        }
        else if (!startDate) {
            throw new common_1.BadRequestException({
                message: 'Invalid startDate!'
            });
        }
        const projectExists = await this.projectModel.findOne({
            title,
            description
        });
        if (projectExists) {
            throw new common_1.ForbiddenException({
                message: 'Project with same title or description already exists!',
                data: projectExists
            });
        }
        else {
            const createdProject = await this.projectModel.create({
                title,
                description,
                owner,
                status,
                priority,
                startDate,
                progress: 0
            });
            await this.businessModel.findByIdAndUpdate(owner, {
                $push: {
                    projects: createdProject
                }
            });
            return {
                message: 'Project Created Successfully!',
                data: createdProject
            };
        }
    }
    async getProjectsOfBusiness(id) {
        const projects = await this.projectModel.find({ owner: id });
        if (!projects.length) {
            throw new common_1.NotFoundException({
                message: 'Projects Not Found!',
                data: null
            });
        }
        else {
            return {
                message: 'Projects Found!',
                data: projects
            };
        }
    }
    async getProjectsOfUser(id) {
        const projects = await this.projectModel.find({
            members: id
        });
        if (!projects.length) {
            throw new common_1.NotFoundException({
                message: 'Projects Not Found!',
                data: null
            });
        }
        else {
            return {
                message: 'Projects Found!',
                data: projects
            };
        }
    }
    async getProjectById(id) {
        if (!id) {
            throw new common_1.BadRequestException({
                message: 'Invalid Id!',
            });
        }
        const project = await this.projectModel.findOne({
            _id: id
        });
        if (!project) {
            throw new common_1.NotFoundException({
                message: 'Project Not Found!',
            });
        }
        else {
            return {
                message: 'Project Found!',
                data: project
            };
        }
    }
    async updateProject(id, member, status, priority, progress, startDate, endDate) {
        if (!id) {
            throw new common_1.BadRequestException({
                message: 'Invalid Id!',
            });
        }
        else if (status != 'completed' && status != 'ongoing' && status != 'expired') {
            throw new common_1.BadRequestException({
                message: 'Invalid Status!',
            });
        }
        else if (priority != 'low' && priority != 'medium' && priority != 'urgent') {
            throw new common_1.BadRequestException({
                message: 'Invalid Priority!',
            });
        }
        const project = await this.projectModel.findOne({
            _id: id
        });
        if (!project) {
            throw new common_1.NotFoundException({
                message: 'Project Not Found!',
            });
        }
        else {
            const updatedProject = await project.updateOne({
                $addToSet: {
                    members: member
                },
                status,
                priority,
                progress,
                startDate,
                endDate
            });
            return {
                message: 'Project Updated Successfully!',
                data: updatedProject
            };
        }
    }
    async addMembers(id, member) {
        if (!id) {
            throw new common_1.BadRequestException({
                message: 'Invalid Id!',
            });
        }
        const project = await this.projectModel.findOne({
            _id: id
        });
        if (!project) {
            throw new common_1.NotFoundException({
                message: 'Project Not Found!',
            });
        }
        else {
            const updatedProjectWithAddedMembers = await project.updateOne({
                $addToSet: {
                    members: member
                }
            });
            await this.userModel.findByIdAndUpdate(member, {
                $addToSet: {
                    projects: project._id
                }
            });
            return {
                message: 'Member Added Successfully!',
                data: updatedProjectWithAddedMembers
            };
        }
    }
    async addMemberThroughUsername(id, username) {
        if (!id) {
            throw new common_1.BadRequestException({
                message: 'Invalid Id!',
            });
        }
        const project = await this.projectModel.findOne({
            _id: id
        });
        if (!project) {
            throw new common_1.NotFoundException({
                message: 'Project Not Found!',
            });
        }
        else {
            const user = await this.userModel.findOne({
                username
            });
            if (!user) {
                throw new common_1.NotFoundException({
                    message: 'User with this username doesnot exists!'
                });
            }
            else {
                const updatedProjectWithAddedMembers = await project.updateOne({
                    $addToSet: {
                        members: user._id
                    }
                });
                await this.userModel.findByIdAndUpdate(user._id, {
                    $addToSet: {
                        projects: project._id
                    }
                });
                return {
                    message: 'Member Added Successfully!',
                    data: updatedProjectWithAddedMembers
                };
            }
        }
    }
    async deleteMember(id, member) {
        if (!id) {
            throw new common_1.BadRequestException({
                message: 'Invalid Id!',
            });
        }
        const project = await this.projectModel.findOne({
            _id: id,
            members: member
        });
        if (!project) {
            throw new common_1.NotFoundException({
                message: 'Project Not Found!',
            });
        }
        else {
            const updatedProjectWithDeletedMembers = await project.updateOne({
                $pull: {
                    members: member
                }
            });
            return {
                message: 'Member Deleted Successfully!',
                data: updatedProjectWithDeletedMembers
            };
        }
    }
    async deleteProject(id) {
        if (!id) {
            throw new common_1.BadRequestException({
                message: 'Invalid Id!',
            });
        }
        const project = await this.projectModel.findOne({
            _id: id
        });
        if (!project) {
            throw new common_1.NotFoundException({
                message: 'Project Not Found!',
            });
        }
        else {
            const deletedProject = await project.deleteOne();
            await this.businessModel.findByIdAndUpdate(project.owner, {
                $pull: {
                    projects: project._id
                }
            });
            return {
                message: 'Project Deleted Successfully!',
                data: deletedProject
            };
        }
    }
    async updateProjectProgress(id) {
        if (!id) {
            throw new common_1.BadRequestException({
                message: 'Invalid Id!'
            });
        }
        const project = await this.projectModel.findOne({
            _id: id
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
            const milestones = await this.milestoneModel.find({
                _id: {
                    $in: project.milestones
                },
                status: 'completed'
            });
            if (!totalMilestones.length) {
                throw new common_1.NotFoundException({
                    message: 'Milestone Doesnot Exists In Project!'
                });
            }
            else {
                const lengthOfTotalMilestones = totalMilestones.length;
                const progress = (milestones.length * 100) / lengthOfTotalMilestones;
                await project.updateOne({
                    progress: progress
                });
                return {
                    message: 'Milestone Progress Updated!',
                    data: progress
                };
            }
        }
    }
};
exports.ProjectService = ProjectService;
exports.ProjectService = ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(project_models_1.Project.name)),
    __param(1, (0, mongoose_1.InjectModel)(business_models_1.Business.name)),
    __param(2, (0, mongoose_1.InjectModel)(user_models_1.User.name)),
    __param(3, (0, mongoose_1.InjectModel)(milestone_models_1.Milestone.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, mongoose_2.Model, mongoose_2.Model, mongoose_2.Model])
], ProjectService);
//# sourceMappingURL=projects.service.js.map