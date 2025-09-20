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
exports.BusinessSchema = exports.Business = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Business = class Business {
    name;
    email;
    password;
    verified;
    logo;
    tagline;
    description;
    industry;
    address;
    projects;
};
exports.Business = Business;
__decorate([
    (0, mongoose_1.Prop)({ required: true, min: [2, 'business name must be at least of 2 charachters.'], max: [80, 'business name must not be more than 80 charachters.'] }),
    __metadata("design:type", String)
], Business.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Business.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, min: [8, 'password must be at least of 8 charachters.'] }),
    __metadata("design:type", String)
], Business.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Boolean)
], Business.prototype, "verified", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Business.prototype, "logo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, minlength: [15, 'tagline must be at least of 15 charachters.'], maxlength: [80, 'tagline must not be more than 80 charachters.'] }),
    __metadata("design:type", String)
], Business.prototype, "tagline", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, minlength: [30, 'description must be at least of 30 charachters.'], maxlength: [600, 'description must not be more than 600 charachters.'] }),
    __metadata("design:type", String)
], Business.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Business.prototype, "industry", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, min: [15, 'address must be at least of 15 charachters.'], max: [150, 'address must not be more than 150 charachters.'] }),
    __metadata("design:type", String)
], Business.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: "Project" }] }),
    __metadata("design:type", Array)
], Business.prototype, "projects", void 0);
exports.Business = Business = __decorate([
    (0, mongoose_1.Schema)()
], Business);
exports.BusinessSchema = mongoose_1.SchemaFactory.createForClass(Business);
//# sourceMappingURL=business.models.js.map