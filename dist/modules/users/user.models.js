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
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let User = class User {
    username;
    email;
    password;
    verified;
    image;
    tagline;
    description;
    skills;
    projects;
};
exports.User = User;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, minlength: [6, 'username must be at least of 6 charachters.'], maxlength: [24, 'username must not be more than 24 charachters.'], lowercase: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, lowercase: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, minlength: [8, 'password must be at least of 8 charachters.'] }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Boolean)
], User.prototype, "verified", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], User.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, minlength: [15, 'tagline must be at least of 15 charachters.'], maxlength: [120, 'tagline must not be more than 120 charachters.'] }),
    __metadata("design:type", String)
], User.prototype, "tagline", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, minlength: [30, 'description must be at least of 30 charachters.'], maxlength: [600, 'description must not be more than 600 charachters.'] }),
    __metadata("design:type", String)
], User.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Array)
], User.prototype, "skills", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: "Project" }] }),
    __metadata("design:type", Array)
], User.prototype, "projects", void 0);
exports.User = User = __decorate([
    (0, mongoose_1.Schema)()
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.models.js.map