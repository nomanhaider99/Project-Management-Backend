import mongoose from 'mongoose';
import { Business } from '../businesses/business.models';
export declare class Project {
    title: string;
    description?: string;
    owner: Business;
    members?: mongoose.Schema.Types.ObjectId[];
    milestones?: mongoose.Schema.Types.ObjectId[];
    status?: "ongoing" | "completed" | "expired";
    priority?: "low" | "medium" | "urgent";
    progress: number;
    startDate: Date;
    endDate: Date;
}
export declare const ProjectSchema: mongoose.Schema<Project, mongoose.Model<Project, any, any, any, mongoose.Document<unknown, any, Project, any> & Project & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Project, mongoose.Document<unknown, {}, mongoose.FlatRecord<Project>, {}> & mongoose.FlatRecord<Project> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
