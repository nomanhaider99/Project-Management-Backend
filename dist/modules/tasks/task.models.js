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
exports.TaskSchema = exports.Task = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const project_models_1 = require("../projects/project.models");
const mongoose_2 = require("mongoose");
const milestone_models_1 = require("../milestones/milestone.models");
let Task = class Task {
    title;
    description;
    project;
    milestone;
};
exports.Task = Task;
__decorate([
    (0, mongoose_1.Prop)({ required: true, minlength: [6, 'task title must be at least of 6 charachters.'], maxlength: [25, 'task title must not be more than 25 charachters.'] }),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, minlength: [30, 'description must be at least of 30 charachters.'], maxlength: [100, 'description must not be more than 100 charachters.'] }),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.default.Schema.Types.ObjectId, ref: "Project" }),
    __metadata("design:type", project_models_1.Project)
], Task.prototype, "project", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.default.Schema.Types.ObjectId, ref: "Milestone" }),
    __metadata("design:type", milestone_models_1.Milestone)
], Task.prototype, "milestone", void 0);
exports.Task = Task = __decorate([
    (0, mongoose_1.Schema)()
], Task);
exports.TaskSchema = mongoose_1.SchemaFactory.createForClass(Task);
//# sourceMappingURL=task.models.js.map