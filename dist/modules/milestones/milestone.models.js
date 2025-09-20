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
exports.MilestoneSchema = exports.Milestone = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const project_models_1 = require("../projects/project.models");
const mongoose_2 = require("mongoose");
let Milestone = class Milestone {
    title;
    description;
    project;
    status;
};
exports.Milestone = Milestone;
__decorate([
    (0, mongoose_1.Prop)({ required: true, minlength: [6, 'milestone title must be at least of 6 charachters.'], maxlength: [25, 'milestone title must not be more than 25 charachters.'] }),
    __metadata("design:type", String)
], Milestone.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, minlength: [30, 'description must be at least of 30 charachters.'], maxlength: [100, 'description must be at least of 100 charachters.'] }),
    __metadata("design:type", String)
], Milestone.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.default.Schema.Types.ObjectId, ref: "Project" }),
    __metadata("design:type", project_models_1.Project)
], Milestone.prototype, "project", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Milestone.prototype, "status", void 0);
exports.Milestone = Milestone = __decorate([
    (0, mongoose_1.Schema)()
], Milestone);
exports.MilestoneSchema = mongoose_1.SchemaFactory.createForClass(Milestone);
//# sourceMappingURL=milestone.models.js.map