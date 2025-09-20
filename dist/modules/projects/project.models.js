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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectSchema = exports.Project = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const business_models_1 = require("../businesses/business.models");
let Project = class Project {
    title;
    description;
    owner;
    members;
    milestones;
    status;
    priority;
    progress;
    startDate;
    endDate;
};
exports.Project = Project;
__decorate([
    (0, mongoose_1.Prop)({ required: true, minlength: [6, 'project title must be at least of 6 charachters.'], maxlength: [25, 'project title must not be more than 25 charachters.'] }),
    __metadata("design:type", String)
], Project.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, minlength: [30, 'description must be at least of 30 charachters.'], maxlength: [100, 'description must be at least of 100 charachters.'] }),
    __metadata("design:type", String)
], Project.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.default.Schema.Types.ObjectId, ref: "Business" }),
    __metadata("design:type", business_models_1.Business)
], Project.prototype, "owner", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: "User" }] }),
    __metadata("design:type", Array)
], Project.prototype, "members", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: "Milestone" }] }),
    __metadata("design:type", Array)
], Project.prototype, "milestones", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Project.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Project.prototype, "priority", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Number)
], Project.prototype, "progress", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, type: Date }),
    __metadata("design:type", Date)
], Project.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Date)
], Project.prototype, "endDate", void 0);
exports.Project = Project = __decorate([
    (0, mongoose_1.Schema)()
], Project);
exports.ProjectSchema = mongoose_1.SchemaFactory.createForClass(Project);
//# sourceMappingURL=project.models.js.map